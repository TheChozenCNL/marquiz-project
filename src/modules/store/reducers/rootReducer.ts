import { combineReducers } from '@reduxjs/toolkit'
import teamsReducer from '@/modules/store/reducers/teamSlice'
import roundReducer from './roundSlice'
import questionReducer from './questionSlice'
import gameReducer from './gameReducer'
import categoryReducer from './categorySlice'
import timerReducer from './timerSlice'

const rootReducer = combineReducers({
  teams: teamsReducer,
  round: roundReducer,
  questions: questionReducer,
  categories: categoryReducer,
  game: gameReducer,
  timer: timerReducer
})

export default rootReducer