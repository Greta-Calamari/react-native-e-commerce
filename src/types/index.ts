export interface CardProps {
  id: number
  price: number
  title: string
  imageURL: string
  qty?: number
  onDeletePress?: (id: number) => void
  onIncreasePress?: (id: number) => void
  onReducePress?: (id: number) => void
}
