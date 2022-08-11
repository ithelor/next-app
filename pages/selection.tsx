import React from 'react'
import Head from 'next/head'
import { ThemeProvider, Global } from '@emotion/react'
import type { NextPage } from 'next'

import { Header, Selection } from 'layouts'
import { Params } from 'components'

import { useHeaderExtras } from 'lib/HeaderExtrasContext'
import { useParamsStore } from 'lib/RootStoreContext'

import GlobalStyles from 'styles/global'
import { baseTheme } from 'styles/theme'

const Select: NextPage = () => {
  const paramsStore = useParamsStore()

  const headerExtras = useHeaderExtras()

  React.useEffect(() => {
    headerExtras?.setState({ isParamsActive: true, isProductsTotalActive: false })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ThemeProvider theme={baseTheme}>
      <Global styles={GlobalStyles} />

      <div>
        <Head>
          <title>Выберите мебель для доставки - ГК Байкал</title>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Выберите мебель для доставки из Китая в крупные города России от группы компаний Байкал"
          />
          <meta
            name="keywords"
            content="выбрать мебель, кол-во, объем, масса, масса нетто, масса брутто, стоимость"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="all" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        </Head>

        <Header extra={paramsStore.isSet() && <Params variant="editable" />} />

        <Selection />
      </div>
    </ThemeProvider>
  )
}

export default Select

