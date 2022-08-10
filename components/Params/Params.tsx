import React from 'react'

import { useParamsStore } from 'lib/RootStoreContext'

import { ButtonIcon } from 'components'
import { Controls } from 'layouts'

import ArrowRightParams from 'public/arrowRightParams.svg'
import PencilIcon from 'public/pencil.svg'
import OkIcon from 'public/ok.svg'

import * as S from './styles'

export interface IParams {
  variant?: 'default' | 'editable' | 'editing'
}

const currencies: { [key: string]: string } = {
  USD: '$',
  CNY: '¥',
  RUB: '₽'
}

export const Params = (props: IParams) => {
  const paramsStore = useParamsStore()

  const [variant, setVariant] = React.useState(props.variant)

  return (
    <S.Params variant={variant}>
      {variant !== 'editing' ? (
        <>
          {paramsStore.from}
          <ArrowRightParams />
          {paramsStore.to},{' '}
          {variant === 'editable' ? paramsStore.currency : currencies[paramsStore.currency]}
          {variant === 'editable' && (
            <ButtonIcon ariaLabel="Edit" onClick={() => setVariant('editing')}>
              <PencilIcon />
            </ButtonIcon>
          )}
        </>
      ) : (
        <Controls
          variant="header"
          quitEditingButton={
            <ButtonIcon ariaLabel="Quit editing" onClick={() => setVariant('editable')}>
              <OkIcon />
            </ButtonIcon>
          }
        />
      )}
    </S.Params>
  )
}
