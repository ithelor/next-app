import React from 'react'

import * as S from './styles'

interface ILink {
  ariaLabel: string
  children: React.ReactNode
}

export const Link = (props: ILink) => {
  return <S.Link aria-label={props.ariaLabel}>{props.children}</S.Link>
}
