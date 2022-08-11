import React from 'react'
import { useRouter } from 'next/router'
import { Observer } from 'mobx-react'

import { ButtonOutlineWide, ButtonPrimary, ButtonPrimaryLarge, Loader, Table } from 'components'

import { useProductsStore } from 'lib/RootStoreContext'
import { useHeaderExtras } from 'lib/HeaderExtrasContext'

import { addSpaces } from 'utils'

import PlusThickIcon from 'public/plusThick.svg'
import ArrowRightIcon from 'public/arrowRight.svg'

import * as S from './styles'

export interface IControls {
  variant?: 'default' | 'absolute'
  children?: React.ReactNode
}

export const Checkout = () => {
  const router = useRouter()
  const productsStore = useProductsStore()

  const headerExtras = useHeaderExtras()
  const [isFinal, setIsFinal] = React.useState(false)

  const [isLoading, setIsLoading] = React.useState(false)

  const deliveryCost = Math.floor((Math.random() + 5) * 10000)
  const customsCost = Math.floor((Math.random() + 5) * 1000)
  const totalCost = deliveryCost + customsCost

  const calculate = () => {
    setIsLoading(true)

    headerExtras?.setState({ ...headerExtras.state, isProductsTotalActive: true })

    setTimeout(() => {
      setIsLoading(false)
      setIsFinal(true)

      headerExtras?.setState({ isParamsActive: false, isProductsTotalActive: true })
    }, 2000)
  }

  const Controls = (props: IControls) => (
    <S.Controls variant={props.variant}>
      {props.children ?? (
        <>
          <ButtonPrimary ariaLabel="Add" onClick={() => router.push('/selection')}>
            Добавить
            <PlusThickIcon />
          </ButtonPrimary>

          {productsStore.products.length > 0 && (
            <ButtonPrimary ariaLabel="Calculate" onClick={calculate}>
              Рассчитать
            </ButtonPrimary>
          )}
        </>
      )}
    </S.Controls>
  )

  return (
    <S.Checkout isFinal={isFinal}>
      {isLoading ? (
        <S.Center>
          <Loader />
        </S.Center>
      ) : (
        <Observer>
          {() => (
            <>
              {isFinal ? (
                <>
                  <Table data={productsStore.products} withTotal />
                  <Controls />
                  <S.Total>
                    <div className="labels">
                      <h3>Стоимость доставки:</h3>
                      <h3>Таможенные платежи:</h3>
                      <h2>Итого:</h2>
                    </div>

                    <div className="costs">
                      <span>{addSpaces(deliveryCost)} руб.</span>
                      <span>{addSpaces(customsCost)} руб.</span>
                      <span>{addSpaces(totalCost)} руб.</span>
                    </div>
                  </S.Total>

                  <Controls>
                    <ButtonOutlineWide ariaLabel="Save" rounder>
                      Сохранить расчёт
                      <ArrowRightIcon />
                    </ButtonOutlineWide>
                    <ButtonPrimaryLarge ariaLabel="Contact" rounder>
                      Связаться по доставке
                    </ButtonPrimaryLarge>
                  </Controls>
                </>
              ) : (
                <>
                  {productsStore.products.length > 0 ? (
                    <>
                      <h1>Добавленная мебель ({productsStore.products.length})</h1>
                      <S.Scrollable>
                        <Table data={productsStore.products} sticky />
                      </S.Scrollable>
                    </>
                  ) : (
                    <h1>Мебель не добавлена</h1>
                  )}

                  <Controls variant="absolute" />
                </>
              )}
            </>
          )}
        </Observer>
      )}
    </S.Checkout>
  )
}
