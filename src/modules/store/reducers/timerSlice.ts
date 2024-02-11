import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TimerState {
  remainingTime: number
  isFinished: boolean
}

const initialState: TimerState = {
  remainingTime: 0,
  isFinished: true,
}

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setRemainingTime(state, action: PayloadAction<number>) {
      state.remainingTime = action.payload
      state.isFinished = false
    },
    decrementRemainingTime(state) {
      if (state.remainingTime > 0) {
        state.remainingTime -= 1
      }
      if (state.remainingTime === 0 ) {
        state.isFinished = true
      }
    },
  },
})

export const { setRemainingTime, decrementRemainingTime } =
  timerSlice.actions
export default timerSlice.reducer
