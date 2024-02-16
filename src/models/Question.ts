import { ICategory } from '@/models/Category'
import { IAnswer } from './Answers'

export interface IQuestion {
  id: number
  category: ICategory | null
  question: { textQuestion: string; imgQuestion?: string[]}
  answer: IAnswer
}
