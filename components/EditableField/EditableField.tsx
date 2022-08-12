import React, { RefObject } from 'react'

import { useProductsStore } from 'lib/RootStoreContext'

import { IProduct } from 'stores/ProductsStore'

import { addSpaces } from 'utils'

import PencilIcon from 'public/pencil.svg'

import * as S from './styles'

export interface IEditableField {
  children: number
  productToEdit: IProduct
  propertyToEdit: string
}

export const EditableField = (props: IEditableField) => {
  const productsStore = useProductsStore()

  const [isEditing, setIsEditing] = React.useState(false)
  const [newValue, setNewValue] = React.useState(props.children)

  // display '-' if no value. display ' руб.' next to price value
  const displayValue = `${
    (props.children && addSpaces(Number(props.children ?? props.children))) || '-'
  }${props.children && props.propertyToEdit === 'price' ? ' руб.' : ''}`

  // save input value in click outside
  const useClickOutside = (ref: RefObject<HTMLTableCellElement>) => {
    React.useEffect(() => {
      const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsEditing(false)

          newValue &&
            newValue !== props.children &&
            productsStore.replaceProduct(props.productToEdit, {
              ...props.productToEdit,
              [props.propertyToEdit]: newValue
            })
        }
      }

      document.addEventListener('mousedown', handleClickOutside)

      return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [newValue]) // eslint-disable-line react-hooks/exhaustive-deps
  }

  const wrapperRef = React.useRef<HTMLTableCellElement>(null)
  useClickOutside(wrapperRef)

  return (
    <S.EditableField ref={wrapperRef} isEditing={isEditing}>
      <div>
        {isEditing ? (
          <input
            type="number"
            defaultValue={String(props.children)}
            autoFocus={isEditing}
            onChange={(event) => setNewValue(event.target.valueAsNumber)}
          />
        ) : (
          displayValue
        )}

        {!isEditing && <PencilIcon onClick={() => setIsEditing(true)} />}
      </div>
    </S.EditableField>
  )
}
