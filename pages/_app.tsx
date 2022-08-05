import type { AppProps } from 'next/app'

import { RootStoreProvider } from 'lib/RootStoreContext'

import { RootStore } from 'stores/RootStore'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <RootStoreProvider {...RootStore}>
    <Component {...pageProps} />
  </RootStoreProvider>
)

export default MyApp

