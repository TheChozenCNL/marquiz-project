import { combineReducers } from '@reduxjs/toolkit'
import teamsReducer from '@/modules/store/reducers/teamSlice'
import roundReducer from './roundSlice'
import questionReducer from './questionSlice'
import gameReducer from './gameReducer'

const rootReducer = combineReducers({
  teams: teamsReducer,
  round: roundReducer,
  questions: questionReducer,
  game: gameReducer,
})

export default rootReducer