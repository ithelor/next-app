import Head from 'next/head'
import { ThemeProvider, Global } from '@emotion/react'
import type { NextPage } from 'next'

import { useParamsStore } from 'lib/RootStoreContext'

import { IHome } from 'pages'
import { Header, Selection } from 'layouts'
import { Params } from 'components'

import GlobalStyles from 'styles/global'
import { baseTheme } from 'styles/theme'

const Select: NextPage<IHome> = () => {
  const paramsStore = useParamsStore()

  return (
    <ThemeProvider theme={baseTheme}>
      <Global styles={GlobalStyles} />

      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header params={paramsStore.isSet() && <Params variant="editable" />} />
        <Selection />
      </div>
    </ThemeProvider>
  )
}

export default Select
