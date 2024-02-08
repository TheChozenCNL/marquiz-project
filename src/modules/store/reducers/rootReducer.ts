import { combineReducers } from '@reduxjs/toolkit'
import teamsReducer from '@/modules/store/reducers/teamSlice'
import roundReducer from './roundSlice'
import questionReducer from './questionSlice'

const rootReducer = combineReducers({
  teams: teamsReducer,
  round: roundReducer,
  questions: questionReducer,
})

export default rootReducer
