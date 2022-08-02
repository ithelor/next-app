import React from 'react'
import { components, DropdownIndicatorProps, GroupBase, MenuProps } from 'react-select'

import DropdownIcon from 'public/arrowDownDropdown.svg'

import * as S from './styles'

interface ISelect {
  caption: string
  ariaLabel: string
  role?: 'search' | 'select' | 'display'
  width: string
  options: {
    value: string | number
    label: string | number
  }[]
  onChange?: (selectedOption: any) => void
  value?: { value: string; label: string | number }
}

// if role=search & no input don't display menu
const Menu = (props: JSX.IntrinsicAttributes & MenuProps<unknown, boolean, GroupBase<unknown>>) =>
  props.selectProps.inputValue.length > 0 ? <components.Menu {...props} /> : null

const DropdownIndicator = (
  props: JSX.IntrinsicAttributes & DropdownIndicatorProps<unknown, boolean, GroupBase<unknown>>
) => (
  <components.DropdownIndicator {...props}>
    <DropdownIcon />
  </components.DropdownIndicator>
)

export const Select = (props: ISelect) => {
  // props for different roles
  const configs = {
    search: {
      components: {
        DropdownIndicator: null,
        Menu
      },
      defaultValue: () => null,
      placeholder: '',
      openMenuOnClick: false,
      openMenuOnFocus: false
    },

    select: {
      components: { DropdownIndicator },
      defaultValue: props.options[0]
    },

    display: {
      components: {
        DropdownIndicator: null,
        Menu
      },

      isDisabled: true,
      value: props.value,

      isForDisplay: true // custom prop
    }
  }

  return (
    <S.Container width={props.width}>
      <S.Select
        classNamePrefix="react-select"
        hideSelectedOptions={true}
        noOptionsMessage={() => null}
        options={props.options}
        onChange={props.onChange}
        {...configs[props.role || 'select']}
      />
    </S.Container>
  )
}
