import React from 'react'
import { useRouter } from 'next/router'
import { Observer } from 'mobx-react'

import { useApi } from 'lib/ApiContext'
import { useParamsStore } from 'lib/RootStoreContext'

import { Select, ButtonPrimaryLarge } from 'components'

import ArrowRight from 'public/arrowRight.svg'

import * as S from './styles'

import { ISelect } from 'components/Select'

export interface IControls {
  variant: 'landing' | 'header'
  quitEditingButton?: React.ReactNode
}

// default variant is the landing layout, compact variant is the header layout
const selectVariants: { [key: string]: ISelect['variant'] } = {
  landing: 'default',
  header: 'compact'
}

const currencies = [
  { value: 'USD', label: 'USD' },
  { value: 'CNY', label: 'CNY' },
  { value: 'RUB', label: 'RUB' }
]

export const Controls = (props: IControls) => {
  const api = useApi()
  const paramsStore = useParamsStore()
  const router = useRouter()

  const cities = api!.cities.map((city) => ({ value: city.objectId, label: city.name }))
  const exchange = [
    { value: 'USD', label: api?.exchange.Valute.USD.Value! / api?.exchange.Valute.USD.Nominal! },
    { value: 'CNY', label: api?.exchange.Valute.CNY.Value! / api?.exchange.Valute.CNY.Nominal! },
    { value: 'RUB', label: 1 }
  ]

  // set default params. "from" should be set manually on the page
  !paramsStore.to.length && paramsStore.setTo(cities[0].label)
  !paramsStore.currency.length && paramsStore.setCurrency(exchange[0].value)
  paramsStore.exchangeRate ?? paramsStore.setExchangeRate(exchange[0].label)

  const [hoveredSelect, setHoveredSelect] = React.useState(0)
  const hover = (index: number) => ({
    onMouseEnter: () => setHoveredSelect(index),
    onMouseLeave: () => setHoveredSelect(0)
  })

  return (
    <S.Container>
      <S.Controls variant={selectVariants[props.variant]}>
        {props.variant === 'landing' && (
          <>
            <S.Label htmlFor="From" isActive={hoveredSelect === 1}>
              Откуда
            </S.Label>
            <S.Label htmlFor="To" isActive={hoveredSelect === 2}>
              Куда
            </S.Label>
            <S.Label htmlFor="Currency" isActive={hoveredSelect === 3}>
              Валюта
            </S.Label>
            <S.Label htmlFor="Exchange rate" isActive={hoveredSelect === 4}>
              Курс
            </S.Label>
          </>
        )}

        <S.Wrapper variant={selectVariants[props.variant]} {...hover(1)}>
          <Select
            ariaLabel="From"
            role="search"
            width="140px"
            options={cities}
            onChange={(selectedFrom) => paramsStore.setFrom(selectedFrom.label)}
            defaultValue={cities.find((city) => city.label === paramsStore.from)}
            variant={selectVariants[props.variant]}
          />
        </S.Wrapper>

        <S.Wrapper variant={selectVariants[props.variant]} {...hover(2)}>
          <Select
            ariaLabel="To"
            width="140px"
            options={cities}
            onChange={(selectedTo) => paramsStore.setTo(selectedTo.label)}
            defaultValue={cities.find((city) => city.label === paramsStore.to)}
            variant={selectVariants[props.variant]}
          />
        </S.Wrapper>

        <S.Wrapper variant={selectVariants[props.variant]} {...hover(3)}>
          <Select
            ariaLabel="Currency"
            width="110px"
            isOptionsCentered={true}
            isSearchable={false}
            options={currencies}
            onChange={(selectedCurrency) => {
              paramsStore.setCurrency(selectedCurrency.label)
              paramsStore.setExchangeRate(
                exchange.find((item) => item.value === selectedCurrency.value)!.label
              )
            }}
            defaultValue={currencies.find((item) => item.value === paramsStore.currency)}
            variant={selectVariants[props.variant]}
          />
        </S.Wrapper>

        <S.Wrapper variant={selectVariants[props.variant]} {...hover(4)}>
          {props.variant === 'landing' ? (
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
                  variant={selectVariants[props.variant]}
                />
              )}
            </Observer>
          ) : (
            props.quitEditingButton
          )}
        </S.Wrapper>
      </S.Controls>
      {props.variant === 'landing' && (
        <ButtonPrimaryLarge ariaLabel="Next" onClick={() => router.push('/selection')}>
          Далее
          <ArrowRight />
        </ButtonPrimaryLarge>
      )}
    </S.Container>
  )
}
