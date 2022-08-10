import React from 'react'
import Image from 'next/image'

import LoaderGif from 'public/loader.gif'

import * as S from './styles'

export const Loader = () => (
  <S.Loader>
    <Image alt="Loader GIF" src={LoaderGif} width="123px" height="123px" />
    <span>Идет загрузка...</span>
  </S.Loader>
)
