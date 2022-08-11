import React from 'react'
import { Observer } from 'mobx-react'

import { ButtonIcon, ButtonLink, EditableField, SelectionEntry } from 'components'

import { useProductsStore } from 'lib/RootStoreContext'
import { furniture, IProduct } from 'stores/ProductsStore'

import { addSpaces, getUniqueKey } from 'utils'

import CrossIcon from 'public/cross.svg'

import * as S from './styles'

export interface ITable {
  data: IProduct[]
  sticky?: boolean
  withTotal?: boolean
}

export const head: { [key: string]: string } = {
  quantity: 'Кол-во',
  volume: 'Общий объем, м3',
  netto: 'Общая масса нетто, кг',
  brutto: 'Общая масса брутто, кг',
  price: 'Стоимость единицы'
}

const calculateTotal = (products: IProduct[], property: string) => {
  let total = 0

  products.forEach(
    (product) =>
      (total += !Number.isNaN(product[property as keyof IProduct])
        ? (product[property as keyof IProduct] as number)
        : 0)
  )

  return total
}

export const Table = (props: ITable) => {
  const productsStore = useProductsStore()

  return (
    <S.Table sticky={props.sticky}>
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
          <>
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
            {props.withTotal && (
              <tfoot>
                <tr>
                  {Object.keys(productsStore.products[0]).map((key, index) => (
                    <td key={key}>
                      {index === 0 ? (
                        <span>Итого: </span>
                      ) : (
                        `${addSpaces(calculateTotal(productsStore.products, key))}${
                          index === Object.keys(productsStore.products[0]).length - 1 ? ' руб.' : ''
                        }`
                      )}
                    </td>
                  ))}
                  <td>
                    <ButtonLink ariaLabel="Reset">Сбросить</ButtonLink>
                  </td>
                </tr>
              </tfoot>
            )}
          </>
        )}
      </Observer>
    </S.Table>
  )
}
