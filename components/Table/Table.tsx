import React from 'react'

import { ButtonIcon, SelectionEntry } from 'components'

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

const addSpaces = (number: number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

const getUniqueKey = (pre?: string) => `${pre}. ${new Date().getTime()}`

export const Table = (props: ITable) => {
  const productsStore = useProductsStore()

  return (
    <S.Table>
      <thead>
        <tr>
          {Object.keys(props.data[0]).map((key: string, index) => (
            <td key={key}>{head[key]}</td>
          ))}
          <td>Удалить</td>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, index) => (
          <tr key={getUniqueKey(item.name)}>
            {Object.values(item).map((property: string, index) =>
              index === 0 ? (
                <td key={getUniqueKey(`${item.name}'s ${Object.keys(item)[index]}`)}>
                  <SelectionEntry variant="selected">
                    {furniture.find((item) => item.title === property)!}
                  </SelectionEntry>
                </td>
              ) : (
                <td key={getUniqueKey(`${item.name}'s ${Object.keys(item)[index]}`)}>
                  {(property && addSpaces(Number(property))) || '-'}
                  {property && index === Object.values(item).length - 1 ? ' руб.' : ''}
                </td>
              )
            )}
            <td>
              <ButtonIcon
                key={getUniqueKey(`${item.name}'s delete button`)}
                ariaLabel="Remove"
                onClick={() => productsStore.products.splice(index)}
              >
                <CrossIcon />
              </ButtonIcon>
            </td>
          </tr>
        ))}
      </tbody>
    </S.Table>
  )
}
