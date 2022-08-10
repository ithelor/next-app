import React from 'react'
import { useRouter } from 'next/router'
import { Observer } from 'mobx-react'

import { ButtonPrimary, Loader, Table } from 'components'

import { useProductsStore } from 'lib/RootStoreContext'

import PlusThickIcon from 'public/plusThick.svg'

import * as S from './styles'

export const Checkout = () => {
  const router = useRouter()
  const productsStore = useProductsStore()

  const [isLoading, setIsLoading] = React.useState(false)

  const calculate = () => {
    setIsLoading(true)

    setTimeout(() => setIsLoading(false), 3000)
  }

  return (
    <S.Checkout>
      {isLoading ? (
        <S.Center>
          <Loader />
        </S.Center>
      ) : (
        <Observer>
          {() => (
            <>
              {productsStore.products.length > 0 ? (
                <>
                  <h1>Добавленная мебель ({productsStore.products.length})</h1>
                  <Table data={productsStore.products} />
                </>
              ) : (
                <h1>Мебель не добавлена</h1>
              )}

              <S.Controls>
                <ButtonPrimary ariaLabel="Add" onClick={() => router.push('/selection')}>
                  Добавить
                  <PlusThickIcon />
                </ButtonPrimary>

                {productsStore.products.length > 0 && (
                  <ButtonPrimary ariaLabel="Calculate" onClick={calculate}>
                    Рассчитать
                  </ButtonPrimary>
                )}
              </S.Controls>
            </>
          )}
        </Observer>
      )}
    </S.Checkout>
  )
}
