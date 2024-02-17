import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { IQuestion } from '@/models/Question'

interface QuestionState {
  questions: IQuestion[]
}

const initialState: QuestionState = {
  questions: [],
}

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    addQuestion: (state: QuestionState, action: PayloadAction<IQuestion>) => {
      state.questions.push(action.payload)
    },
    updateQuestion: (
      state: QuestionState,
      action: PayloadAction<IQuestion>
    ) => {
      state.questions = state.questions.map((question) =>
        question.id === action.payload.id ? action.payload : question
      )
    },
    deleteQuestion: (state: QuestionState, action: PayloadAction<number>) => {
      state.questions = state.questions.filter(
        (question) => question.id !== action.payload
      )
    },
    resetQuestionState: () => initialState,
  },
})

export const {
  addQuestion,
  updateQuestion,
  deleteQuestion,
  resetQuestionState,
} = questionSlice.actions

export default questionSlice.reducer
