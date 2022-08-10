import React from 'react'
import { Observer } from 'mobx-react'
import Head from 'next/head'
import { ThemeProvider, Global } from '@emotion/react'
import type { NextPage } from 'next'

import { useParamsStore, useProductsStore } from 'lib/RootStoreContext'

import { Header, Checkout } from 'layouts'
import { Link, Params } from 'components'

import GlobalStyles from 'styles/global'
import { baseTheme } from 'styles/theme'

const Select: NextPage = () => {
  const paramsStore = useParamsStore()
  const productsStore = useProductsStore()

  return (
    <ThemeProvider theme={baseTheme}>
      <Global styles={GlobalStyles} />

      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Observer>
          {() => (
            <Header
              extra={
                <>
                  {paramsStore.isSet() && <Params variant="default" />}
                  {productsStore.products.length > 0 && (
                    <Link to="checkout">Добавленная мебель ({productsStore.products.length})</Link>
                  )}
                </>
              }
            />
          )}
        </Observer>

        {productsStore.products.length > 0 && <Checkout />}
      </div>
    </ThemeProvider>
  )
}

export default Select
