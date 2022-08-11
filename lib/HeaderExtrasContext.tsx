import React from 'react'

interface IHeaderExtrasContext {
  state: {
    isParamsActive: boolean
    isProductsTotalActive: boolean
  }

  setState: (value: { isParamsActive: boolean; isProductsTotalActive: boolean }) => void
}

const HeaderExtrasContext = React.createContext<IHeaderExtrasContext | null>(null)

export const useHeaderExtras = () => React.useContext(HeaderExtrasContext)

interface IHeaderExtras {
  value?: IHeaderExtrasContext
  children: React.ReactNode
}

export const HeaderExtrasProvider = (props: IHeaderExtras) => {
  const [headerExtras, setHeaderExtras] = React.useState<IHeaderExtrasContext['state']>({
    isParamsActive: false,
    isProductsTotalActive: false
  })

  return (
    <HeaderExtrasContext.Provider value={{ state: headerExtras, setState: setHeaderExtras }}>
      {props.children}
    </HeaderExtrasContext.Provider>
  )
}
