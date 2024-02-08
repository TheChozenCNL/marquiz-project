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
    },
})

export const { addQuestion } = questionSlice.actions

export default questionSlice.reducer