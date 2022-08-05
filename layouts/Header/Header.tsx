import React from 'react'

import { Logo, ButtonLight } from 'components'

import * as S from './styles'

interface IHeader {
  params?: React.ReactNode
}

export const Header = (props: IHeader) => (
  <S.Header>
    <S.LeftContainer>
      <Logo />
      {props.params}
    </S.LeftContainer>
    <ButtonLight ariaLabel="Contact">Связаться</ButtonLight>
  </S.Header>
)
