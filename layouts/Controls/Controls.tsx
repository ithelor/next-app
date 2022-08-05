import React from 'react'
import { Observer } from 'mobx-react'

import { Select, ButtonPrimaryLarge } from 'components'

import { useApi } from 'lib/ApiContext'

import ArrowRight from 'public/arrowRight.svg'

import * as S from './styles'
import { useParamsStore } from 'lib/RootStoreContext'
import Link from 'next/link'

const currencies = [
  { value: 'USD', label: 'USD' },
  { value: 'CNY', label: 'CNY' },
  { value: 'RUB', label: 'RUB' }
]

export const Controls = () => {
  const api = useApi()
  const paramsStore = useParamsStore()

  const cities = api!.cities.map((city) => ({ value: city.objectId, label: city.name }))

  const exchange = [
    { value: 'USD', label: api?.exchange.Valute.USD.Value! / api?.exchange.Valute.USD.Nominal! },
    { value: 'CNY', label: api?.exchange.Valute.CNY.Value! / api?.exchange.Valute.CNY.Nominal! },
    { value: 'RUB', label: 1 }
  ]

  const [hoveredSelect, setHoveredSelect] = React.useState(0)

  const hover = (index: number) => ({
    onMouseEnter: () => setHoveredSelect(index),
    onMouseLeave: () => setHoveredSelect(0)
  })

  return (
    <>
      <S.Controls>
        <S.Label htmlFor="From" isActive={hoveredSelect === 1}>
          Откуда
        </S.Label>
        <S.Wrapper {...hover(1)}>
          <Select
            ariaLabel="From"
            role="search"
            width="170px"
            options={cities}
            onChange={(selectedFrom) => paramsStore.setFrom(selectedFrom.label)}
            defaultValue={cities.find((city) => city.label === paramsStore.from)}
          />
        </S.Wrapper>

        <S.Label htmlFor="To" isActive={hoveredSelect === 2}>
          Куда
        </S.Label>
        <S.Wrapper {...hover(2)}>
          <Select
            ariaLabel="To"
            width="200px"
            options={cities}
            onChange={(selectedTo) => paramsStore.setTo(selectedTo.label)}
            defaultValue={cities.find((city) => city.label === paramsStore.to)}
          />
        </S.Wrapper>

        <S.Label htmlFor="Currency" isActive={hoveredSelect === 3}>
          Валюта
        </S.Label>
        <S.Wrapper {...hover(3)}>
          <Select
            ariaLabel="Currency"
            width="110px"
            options={currencies}
            onChange={(selectedCurrency) => {
              paramsStore.setCurrency(selectedCurrency.label)
              paramsStore.setExchangeRate(
                exchange.find((item) => item.value === selectedCurrency.value)!.label
              )
            }}
            defaultValue={currencies.find((item) => item.value === paramsStore.currency)}
          />
        </S.Wrapper>

        <S.Label htmlFor="Exchange rate" isActive={hoveredSelect === 4}>
          Курс
        </S.Label>
        <S.Wrapper {...hover(4)}>
          <Observer>
            {() => (
              <Select
                ariaLabel="Exchange rate"
                role="display"
                width="140px"
                options={exchange}
                value={{
                  value: paramsStore.currency ?? exchange[0].value,
                  label: `${(paramsStore.exchangeRate ?? exchange[0].label)
                    .toFixed(2)
                    .replace('.', ',')} руб.`
                }}
              />
            )}
          </Observer>
        </S.Wrapper>

        <hr onMouseEnter={() => console.log('🤫')} />
        <ButtonPrimaryLarge ariaLabel="Next">
          Далее
          <ArrowRight />
        </ButtonPrimaryLarge>
      </S.Controls>
    </>
  )
}
