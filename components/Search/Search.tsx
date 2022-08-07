import React from 'react'

import { ButtonPrimary } from 'components'

import * as S from './styles'

interface ISearch {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onSearch?: () => void
}

export const Search = (props: ISearch) => (
  <S.Search>
    <input type="search" placeholder="Введите название" onChange={props.onChange} />
    <ButtonPrimary ariaLabel="Search" onClick={props.onSearch}>
      Поиск
    </ButtonPrimary>
  </S.Search>
)
