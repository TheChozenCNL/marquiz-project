import { combineReducers } from '@reduxjs/toolkit'
import teamsReducer from "@/modules/store/reducers/teamSlice";

const rootReducer = combineReducers({
    teams: teamsReducer,
})

export default rootReducer
