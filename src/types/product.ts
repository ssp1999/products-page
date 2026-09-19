export interface IProduct {
  id: number
  image: string
  name: string
  description: string
  isNew?: boolean | null
  discount?: string | null
  price: number
  oldPrice?: number | null
}