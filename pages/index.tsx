import Head from 'next/head'
import { ThemeProvider, Global } from '@emotion/react'
import type { NextPage } from 'next'

import { Header, Landing } from 'layouts'

import { ApiProvider, useApi } from 'lib/ApiContext'

import GlobalStyles from 'styles/global'
import { baseTheme } from 'styles/theme'

import { ICity, IExchange } from 'models'

export interface IHome {
  cities: ICity[]
  exchange: IExchange
}

const Home: NextPage<IHome> = () => (
  <ThemeProvider theme={baseTheme}>
    <Global styles={GlobalStyles} />

    <div>
      <Head>
        <title>Рассчитайте стоимость доставки из Китая - ГК Байкал</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Доставка мебели из Китая в крупные города России от группы компаний Байкал"
        />
        <meta
          name="keywords"
          content="доставка мебели из Китая, доставка мебели из Китая стоимость, консолидация грузов, подготовка груза к перевозке, таможенное оформление грузов из Китая, оформление мебели, растаможка мебели, растаможка мебели из Китая, сертификация мебели"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="all" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <Header />

      <Landing />
    </div>
  </ThemeProvider>
)

export default Home

