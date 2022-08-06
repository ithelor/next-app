import React from 'react'

import { ICity, IExchange } from 'models'

interface IApiContext {
  cities: ICity[]
  exchange: IExchange
}

interface IApiProvider {
  value: IApiContext
  children: React.ReactNode
}

const ApiContext = React.createContext<IApiContext | null>(null)

export const useApi = () => React.useContext(ApiContext)

export const ApiProvider = (props: IApiProvider) => (
  <ApiContext.Provider value={props.value}>{props.children}</ApiContext.Provider>
)
