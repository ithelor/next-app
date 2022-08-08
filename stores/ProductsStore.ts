import { action, makeObservable, observable } from 'mobx'

export interface IProduct {
  name: string
  quantity: number
  volume: number
  netto: number
  brutto: number
  price: number
}

export interface ProductsHydration {
  products: IProduct[]
}

export class ProductsStore {
  products: IProduct[] = []

  constructor() {
    makeObservable(this, {
      products: observable,
      addProduct: action
    })
  }

  addProduct = (value: IProduct) => this.products.push(value)

  hydrate(data?: ProductsHydration) {
    if (data) {
      this.products = data.products
    }
  }
}
