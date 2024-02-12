import { ICategory } from '@/models/Category'

export interface IQuestion {
  id: number
  category: ICategory | null
  question: string
  answer: string
}