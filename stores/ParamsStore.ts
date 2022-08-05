import { action, makeObservable, observable } from 'mobx'

export type ParamsHydration = {
  from: string
  to: string
  currency: string
  exchangeRate: number
}

export class ParamsStore {
  from = ''
  to = ''
  currency = ''
  exchangeRate: number | undefined

  constructor() {
    makeObservable(this, {
      from: observable,
      to: observable,
      currency: observable,
      exchangeRate: observable,
      setFrom: action,
      setTo: action,
      setCurrency: action,
      setExchangeRate: action
    })
  }

  setFrom = (value: string) => (this.from = value)
  setTo = (value: string) => (this.to = value)
  setCurrency = (value: string) => (this.currency = value)
  setExchangeRate = (value: number) => (this.exchangeRate = value)

  hydrate(data?: ParamsHydration) {
    if (data) {
      this.from = data.from
      this.to = data.to
      this.currency = data.currency
      this.exchangeRate = data.exchangeRate
    }
  }
}
