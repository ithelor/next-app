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

  const [selectedOption, setSelectedOption] = React.useState<
    { value: string; label: number } | undefined
  >(exchange[0])

  const exchangeOption =
    exchange.find((item) => item.value === selectedOption?.value) || exchange[0]

  return (
    <>
      <S.Controls>
        <S.Label htmlFor="">Откуда</S.Label>
        <S.Label htmlFor="">Куда</S.Label>
        <S.Label htmlFor="">Валюта</S.Label>
        <S.Label htmlFor="">Курс</S.Label>

        <S.Wrapper>
          <Select caption="Откуда" ariaLabel="From" role="search" width="170px" options={cities} />
        </S.Wrapper>

        <S.Wrapper>
          <Select caption="Куда" ariaLabel="Where" width="200px" options={cities} />
        </S.Wrapper>

        <S.Wrapper>
          <Select
            caption="Валюта"
            ariaLabel="Currency"
            width="110px"
            options={currencies}
            onChange={(selectedOption) =>
              setSelectedOption(exchange.find((item) => item.value === selectedOption.value))
            }
          />
        </S.Wrapper>

        <S.Wrapper>
          <Select
            caption="Курс"
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
      </S.Controls>

      <ButtonPrimaryLarge ariaLabel="Next">
        Далее
        <ArrowRight />
      </ButtonPrimaryLarge>
    </>
  )
}
