import { ParamsHydration, ParamsStore } from './ParamsStore'
import { ProductsHydration, ProductsStore } from './ProductsStore'

export interface RootStoreHydration {
  paramsStore?: ParamsHydration
  productsStore?: ProductsHydration
}

export class RootStore {
  paramsStore: ParamsStore
  productsStore: ProductsStore

  constructor() {
    this.paramsStore = new ParamsStore()
    this.productsStore = new ProductsStore()
  }

  hydrate(data: RootStoreHydration) {
    if (data.paramsStore) {
      this.paramsStore.hydrate(data.paramsStore)
    }

    if (data.productsStore) {
      this.productsStore.hydrate(data.productsStore)
    }
  }
}
