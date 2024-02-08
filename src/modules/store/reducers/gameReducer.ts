import { IRound } from '@/models/Round'
import { ITeam } from '@/models/Team'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface GameState {
  gameIsStarted?: boolean
  countOfRounds: number
  currentRound: number
  team?: ITeam
  questions: { question: string; answer: string }[]
  countOfCorrectAnswer: number
}

const initialState: GameState = {
  gameIsStarted: undefined,
  countOfRounds: 0,
  currentRound: 1,
  team: undefined,
  questions: [],
  countOfCorrectAnswer: 0,
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: (state: GameState, action: PayloadAction<GameState>) => {
      state.gameIsStarted = action.payload.gameIsStarted
      state.countOfRounds = action.payload.countOfRounds
      state.team = action.payload.team
      state.questions = action.payload.questions
      state.countOfCorrectAnswer = 0
    },
    answerQuestion: (state: GameState, action: PayloadAction<string>) => {
      const currentQuestion = state.questions[state.currentRound - 1]
      if (
        currentQuestion.answer.toLowerCase() === action.payload.toLowerCase()
      ) {
        state.countOfCorrectAnswer++

        if (state.team !== undefined) {
          state.team.points += 1

          const roundData: IRound = {
            roundNumber: state.currentRound,
            roundPoints: 1,
          }
          state.team.rounds.push(roundData)
        }
      }
      if (state.currentRound < state.countOfRounds) {
        state.currentRound++
      } else {
        state.gameIsStarted = false
      }
    },
    clearState: (state: GameState) => {
      state.gameIsStarted = false
      state.countOfRounds = 0
      state.currentRound = 1
      state.team = undefined
      state.questions = []
      state.countOfCorrectAnswer = 0
    },
  },
})

export const { startGame, answerQuestion, clearState } = gameSlice.actions

export default gameSlice.reducer
