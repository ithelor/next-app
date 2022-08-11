import React from 'react'
import { Observer } from 'mobx-react'
import Head from 'next/head'
import { ThemeProvider, Global } from '@emotion/react'
import type { NextPage } from 'next'

import { Header, Checkout } from 'layouts'
import { Link, Params } from 'components'

import { useHeaderExtras } from 'lib/HeaderExtrasContext'
import { useParamsStore, useProductsStore } from 'lib/RootStoreContext'

import GlobalStyles from 'styles/global'
import { baseTheme } from 'styles/theme'

const Select: NextPage = () => {
  const paramsStore = useParamsStore()
  const productsStore = useProductsStore()

  const headerExtras = useHeaderExtras()

  React.useEffect(() => {
    headerExtras?.setState({ isParamsActive: true, isProductsTotalActive: false })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

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
                  {paramsStore.isSet() && headerExtras?.state.isParamsActive && (
                    <Params variant="default" />
                  )}
                  {headerExtras?.state.isProductsTotalActive && (
                    <Link to="checkout">Добавленная мебель ({productsStore.products.length})</Link>
                  )}
                </>
              }
            />
          )}
        </Observer>

        <Checkout />
      </div>
    </ThemeProvider>
  )
}

export default Select
