import React from 'react'

import { Table } from 'components'

import { useProductsStore } from 'lib/RootStoreContext'

import * as S from './styles'

export const Checkout = () => {
  const productsStore = useProductsStore()

  return (
    <S.Checkout>
      <Table data={productsStore.products} />
    </S.Checkout>
  )
}
