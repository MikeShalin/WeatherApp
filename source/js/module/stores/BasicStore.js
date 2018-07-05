export default class BasicStore {
  constructor(stores) {
    this.allStores = stores
  }

  getStore(storeName) {
    return this.allStores[storeName]
  }
}
