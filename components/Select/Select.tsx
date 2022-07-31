import React from 'react'

import * as S from './styles'

interface ISelect {
  label: string
  data: string[]
  ariaLabel: string
}

export const Select = (props: ISelect) => {
  // hides selected option in the dropdown
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const selectRef = React.useRef<HTMLSelectElement>(null)

  return (
    <S.Container>
      <S.Label htmlFor={props.label}>{props.label}</S.Label>
      <S.Select
        id={props.label}
        ref={selectRef}
        aria-label={props.ariaLabel}
        onChange={() => setSelectedIndex(selectRef.current!.selectedIndex)}
      >
        {props.data.map((item, index) => (
          <option key={item} value={item} hidden={selectedIndex === index}>
            {item}
          </option>
        ))}
      </S.Select>
    </S.Container>
  )
}
