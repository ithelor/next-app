import React from 'react'
import { Observer } from 'mobx-react'

import { ButtonIcon, EditableField, SelectionEntry } from 'components'

import { useProductsStore } from 'lib/RootStoreContext'

import { furniture, IProduct } from 'stores/ProductsStore'

import CrossIcon from 'public/cross.svg'

import * as S from './styles'

interface ITable {
  data: IProduct[]
}

export const head: { [key: string]: string } = {
  quantity: 'Кол-во',
  volume: 'Общий объем, м3',
  netto: 'Общая масса нетто, кг',
  brutto: 'Общая масса брутто, кг',
  price: 'Стоимость единицы'
}

const getUniqueKey = (pre?: string) => `${pre}. ${Math.random()}`

export const Table = (props: ITable) => {
  const productsStore = useProductsStore()

  return (
    <S.Table>
      <thead>
        <tr>
          {Object.keys(props.data[0]).map((key: string) => (
            <td key={key}>{head[key]}</td>
          ))}
          <td>Удалить</td>
        </tr>
      </thead>
      <Observer>
        {() => (
          <tbody>
            {props.data.map((item, index) => (
              <tr key={getUniqueKey(item.name)}>
                {Object.values(item).map((property: string | number, index) =>
                  index === 0 ? (
                    <td key={getUniqueKey(`${item.name}'s ${Object.keys(item)[index]}`)}>
                      <SelectionEntry variant="selected">
                        {furniture.find((item) => item.title === property)!}
                      </SelectionEntry>
                    </td>
                  ) : (
                    <EditableField
                      key={getUniqueKey(`${item.name}'s ${Object.keys(item)[index]}`)}
                      productToEdit={item}
                      propertyToEdit={Object.keys(item)[index]}
                    >
                      {property as number}
                    </EditableField>
                  )
                )}
                <td>
                  <ButtonIcon
                    key={getUniqueKey(`${item.name}'s delete button`)}
                    ariaLabel="Remove"
                    onClick={() => productsStore.removeProduct(index)}
                  >
                    <CrossIcon />
                  </ButtonIcon>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </Observer>
    </S.Table>
  )
}
