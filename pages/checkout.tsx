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
          <title>Добавленная мебель - ГК Байкал</title>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Добавленная мебель для доставки из Китая в крупные города России от группы компаний Байкал"
          />
          <meta
            name="keywords"
            content="итого, кол-во, объем, масса, масса нетто, масса брутто, стоимость доставки, таможенные платежи"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="all" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
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

