import { IQuestion } from '@/models/Question'
import { IStartGame } from '@/models/StartGame'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface GameState {
  gameIsStarted?: boolean
  countOfRounds: number
  currentRound: number
  questions: IQuestion[]
  isShowAnswer: boolean
  isStopGame: boolean
}

const initialState: GameState = {
  gameIsStarted: undefined,
  countOfRounds: 3,
  currentRound: 1,
  questions: [],
  isShowAnswer: false,
  isStopGame: false,
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: (state: GameState, action: PayloadAction<IStartGame>) => {
      state.gameIsStarted = action.payload.gameIsStarted
      state.countOfRounds = action.payload.countOfRounds
        ? action.payload.countOfRounds
        : 3
      state.currentRound = 1
    },
    showAnswer: (state: GameState) => {
      state.isShowAnswer = true
      state.isStopGame = true
    },
    nextRound: (state: GameState) => {
      state.currentRound += 1
      state.isShowAnswer = false
      state.isStopGame = false
    },
    endGame: (state: GameState) => {
      state.currentRound = 1
      state.isShowAnswer = false
      state.isStopGame = false
      state.questions = []
      state.countOfRounds = 3
      state.gameIsStarted = false
    },
    setQuestions: (state: GameState, action: PayloadAction<IQuestion[]>) => {
      state.questions = action.payload
    },
  },
})

export const { startGame, showAnswer, nextRound, endGame } = gameSlice.actions

export default gameSlice.reducer
