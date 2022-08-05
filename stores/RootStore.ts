import { ParamsHydration, ParamsStore } from './ParamsStore'

export interface RootStoreHydration {
  paramsStore?: ParamsHydration
}

export class RootStore {
  paramsStore: ParamsStore

  constructor() {
    this.paramsStore = new ParamsStore()
  }

  hydrate(data: RootStoreHydration) {
    if (data.paramsStore) {
      this.paramsStore.hydrate(data.paramsStore)
    }
  }
}
