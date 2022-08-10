import React from 'react'

import { Logo, ButtonLight } from 'components'

import * as S from './styles'

interface IHeader {
  extra?: React.ReactNode
}

export const Header = (props: IHeader) => (
  <S.Header>
    <S.LeftContainer>
      <Logo />
      {props.extra}
    </S.LeftContainer>
    <ButtonLight ariaLabel="Contact">Связаться</ButtonLight>
  </S.Header>
)
