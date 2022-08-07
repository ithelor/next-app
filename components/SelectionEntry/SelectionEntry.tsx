import React from 'react'
import Image from 'next/image'

import { ButtonPrimary } from 'components'

import * as S from './styles'

export interface ISelectionEntry {
  children: { title: string; img: string }
  onSelect?: () => void
  variant?: 'list' | 'selected'
}

const variants = {
  list: {
    width: 120,
    height: 97
  },

  selected: {
    width: 87,
    height: 70
  }
}

export const SelectionEntry = (props: ISelectionEntry) => (
  <S.SelectionEntry variant={props.variant}>
    <Image
      alt={props.children.title}
      src={props.children.img}
      {...variants[props.variant || 'list']}
    />
    <span className="title">{props.children.title}</span>
    {props.variant === 'list' && (
      <ButtonPrimary ariaLabel="Select" onClick={props.onSelect}>
        Выбрать
      </ButtonPrimary>
    )}
  </S.SelectionEntry>
)
