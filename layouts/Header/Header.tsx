import React from 'react'

import { Logo, ButtonLight } from 'components'

import * as S from './styles'

export const Header = () => (
  <S.Header>
    <Logo />
    <ButtonLight ariaLabel="Contact">Связаться</ButtonLight>
  </S.Header>
)
