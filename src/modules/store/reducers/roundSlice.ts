import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface RoundState {
  roundNumber: number
}

const initialState: RoundState = {
  roundNumber: 3,
}

export const roundSlice = createSlice({
  name: 'round',
  initialState,
  reducers: {
    setRoundCount: (state: RoundState, action: PayloadAction<number>) => {
      state.roundNumber = action.payload
    },
  },
})

export const { setRoundCount } = roundSlice.actions

export default roundSlice.reducer
