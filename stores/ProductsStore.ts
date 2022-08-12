import { action, makeObservable, observable } from 'mobx'

export interface IFurniture {
  title: string
  img: string
}

export const furniture: IFurniture[] = [
  {
    title: 'Стул',
    img: 'https://cgifurniture.com/wp-content/uploads/2019/12/furniture-rendering-leather-chair-1030x1030.jpg'
  },
  {
    title: 'Стол',
    img: 'https://cgifurniture.com/wp-content/uploads/2021/05/custom-rendering-luxurious-table-1030x1030.jpg'
  },
  {
    title: 'Кресло',
    img: 'https://cgifurniture.com/wp-content/uploads/2019/12/furniture-rendering-armchair-design-1030x1030.jpg'
  },
  {
    title: 'Софа',
    img: 'https://cgifurniture.com/wp-content/uploads/2022/07/sofa060.webp'
  },
  {
    title: 'Кровать',
    img: 'https://cgifurniture.com/wp-content/uploads/2021/06/product-3d-visualization-better-bona-bed.png'
  },
  {
    title: 'Комод',
    img: 'https://cgifurniture.com/wp-content/uploads/2019/01/B6-SHA_00016.jpg'
  },
  {
    title: 'Шкаф',
    img: 'https://cgifurniture.com/wp-content/uploads/2019/11/high-quality-3d-visualization-wardrobe-1030x893.png'
  }
]

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
      addProduct: action,
      replaceProduct: action,
      removeProduct: action
    })
  }

  addProduct = (value: IProduct) => this.products.push(value)

  replaceProduct = (oldProduct: IProduct, newProduct: IProduct) =>
    (this.products[this.products.findIndex((product) => product === oldProduct)] = newProduct)

  removeProduct = (index: number) => this.products.splice(index, 1)

  hydrate(data?: ProductsHydration) {
    if (data) {
      this.products = data.products
    }
  }
}
