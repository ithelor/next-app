import React from 'react'
import { enableStaticRendering } from 'mobx-react'

import { RootStore, RootStoreHydration } from 'stores/RootStore'

enableStaticRendering(typeof window === 'undefined')

let store: RootStore
const StoreContext = React.createContext<RootStore | undefined>(undefined)

StoreContext.displayName = 'StoreContext'

const initializeStore = (initialData?: RootStoreHydration): RootStore => {
  const _store = store ?? new RootStore()

  if (initialData) {
    _store.hydrate(initialData)
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store

  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export const useParamsStore = () => {
  const { paramsStore } = useRootStore()
  return paramsStore
}

export const useRootStore = () => {
  const context = React.useContext(StoreContext)

  if (context === undefined) {
    throw new Error('useRootStore must be used within RootStoreProvider')
  }

  return context
}

export const RootStoreProvider = (props: {
  children: React.ReactNode
  hydrationData?: RootStoreHydration
}) => {
  const store = initializeStore(props.hydrationData)

  return <StoreContext.Provider value={store}>{props.children}</StoreContext.Provider>
}
