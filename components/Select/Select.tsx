import React from 'react'
import { components } from 'react-select'

import DropdownIcon from 'public/arrowDownDropdown.svg'

import * as S from './styles'

interface ISelect {
  caption: string
  ariaLabel: string
  width: string
  options: {
    value: string
    label: string
  }[]
}

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <DropdownIcon />
    </components.DropdownIndicator>
  )
}

export const Select = (props: ISelect) => {
  return (
    <S.Container width={props.width}>
      <S.Select
        classNamePrefix="Select"
        components={{ DropdownIndicator }}
        options={props.options}
        defaultValue={props.options[0]}
        hideSelectedOptions={true}
        isSearchable={false}
      />
    </S.Container>
  )
}
