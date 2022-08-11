import React from 'react'
import App from 'next/app'
import type { AppContext, AppProps } from 'next/app'

import { ApiProvider } from 'lib/ApiContext'
import { HeaderExtrasProvider } from 'lib/HeaderExtrasContext'
import { RootStoreProvider } from 'lib/RootStoreContext'

import { RootStore } from 'stores/RootStore'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ApiProvider value={pageProps}>
    <HeaderExtrasProvider>
      <RootStoreProvider {...RootStore}>
        <Component {...pageProps} />
      </RootStoreProvider>
    </HeaderExtrasProvider>
  </ApiProvider>
)

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)

  const citiesResponse = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/cities`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })

  const exchangeResponse = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/exchange`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })

  const cities = await citiesResponse.json()
  const exchange = await exchangeResponse.json()

  return {
    ...appProps,
    pageProps: { cities, exchange }
  }
}

export default MyApp
