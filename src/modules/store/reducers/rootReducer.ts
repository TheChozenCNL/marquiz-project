import { combineReducers } from '@reduxjs/toolkit'
import teamsReducer from '@/modules/store/reducers/teamSlice'
import roundReducer from './roundSlice'

const rootReducer = combineReducers({
  teams: teamsReducer,
  round: roundReducer,
})

export default rootReducer
