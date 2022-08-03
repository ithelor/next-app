import React from 'react'
import { Select, ButtonPrimaryLarge } from 'components'

import ArrowRight from 'public/arrowRight.svg'

import { ICity, IExchange } from 'models'

import * as S from './styles'

interface IControls {
  cities: ICity[]
  exchange: IExchange
}

const currencies = [
  { value: 'USD', label: 'USD' },
  { value: 'CNY', label: 'CNY' },
  { value: 'RUB', label: 'RUB' }
]

export const Controls = (props: IControls) => {
  const cities = props.cities.map((city) => ({ value: city.objectId, label: city.name }))

  const exchange = [
    { value: 'USD', label: props.exchange.Valute.USD.Value / props.exchange.Valute.USD.Nominal },
    { value: 'CNY', label: props.exchange.Valute.CNY.Value / props.exchange.Valute.CNY.Nominal },
    { value: 'RUB', label: 1 }
  ]

  const [selectedCurrency, setSelectedCurrency] = React.useState<typeof exchange[0] | undefined>(
    exchange[0]
  )
  const [hoveredSelect, setHoveredSelect] = React.useState(0)

  const exchangeOption =
    exchange.find((item) => item.value === selectedCurrency?.value) || exchange[0]

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
          <Select ariaLabel="From" role="search" width="170px" options={cities} />
        </S.Wrapper>

        <S.Label htmlFor="Where" isActive={hoveredSelect === 2}>
          Куда
        </S.Label>
        <S.Wrapper {...hover(2)}>
          <Select ariaLabel="Where" width="200px" options={cities} />
        </S.Wrapper>

        <S.Label htmlFor="Currency" isActive={hoveredSelect === 3}>
          Валюта
        </S.Label>
        <S.Wrapper {...hover(3)}>
          <Select
            ariaLabel="Currency"
            width="110px"
            options={currencies}
            onChange={(selectedCurrency) =>
              setSelectedCurrency(exchange.find((item) => item.value === selectedCurrency.value))
            }
          />
        </S.Wrapper>

        <S.Label htmlFor="Exchange rate" isActive={hoveredSelect === 4}>
          Курс
        </S.Label>
        <S.Wrapper {...hover(4)}>
          <Select
            ariaLabel="Exchange rate"
            role="display"
            width="120px"
            options={exchange}
            value={{
              value: exchangeOption.value,
              label: `${exchangeOption.label.toFixed(2).replace('.', ',')} руб.`
            }}
          />
        </S.Wrapper>

        <hr onMouseEnter={() => console.log('😐')} />
        <ButtonPrimaryLarge ariaLabel="Next">
          Далее
          <ArrowRight />
        </ButtonPrimaryLarge>
      </S.Controls>
    </>
  )
}
