import { combineReducers } from '@reduxjs/toolkit'
import teamsReducer from '@/modules/store/reducers/teamSlice'
import roundReducer from './roundSlice'
import gameReducer from './gameReducer'

const rootReducer = combineReducers({
  teams: teamsReducer,
  round: roundReducer,
  game: gameReducer,
})

export default rootReducer
