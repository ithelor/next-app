import React from 'react'

import { SelectionEntry } from 'components'

import { furniture, IProduct } from 'stores/ProductsStore'

import * as S from './styles'

export const head: { [key: string]: string } = {
  quantity: 'Кол-во',
  volume: 'Общий объем, м3',
  netto: 'Общая масса нетто, кг',
  brutto: 'Общая масса брутто, кг',
  price: 'Стоимость единицы'
}

interface ITable {
  data: IProduct[]
}

export const Table = (props: ITable) => (
  <S.Table>
    <thead>
      <tr>
        {Object.keys(props.data[0]).map((key: string, index) => (
          <td key={key}>{head[key]}</td>
        ))}
      </tr>
    </thead>
    <tbody>
      {props.data.map((item) => (
        <tr key={item.name}>
          {Object.values(item).map((property: string, index) =>
            index === 0 ? (
              <td>
                <SelectionEntry variant="selected">
                  {furniture.find((item) => item.title === property)!}
                </SelectionEntry>
              </td>
            ) : (
              <td key={property}>{property || '-'}</td>
            )
          )}
        </tr>
      ))}
    </tbody>
  </S.Table>
)
