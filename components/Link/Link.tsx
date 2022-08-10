import React from 'react'
import { useRouter } from 'next/router'

import * as S from './styles'

interface ILink {
  to: string
  children: React.ReactNode
}

export const Link = (props: ILink) => {
  const router = useRouter()

  return <S.Link onClick={() => router.push(props.to)}>{props.children}</S.Link>
}
