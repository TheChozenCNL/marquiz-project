import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { ITeam } from '@/models/Team'

interface TeamState {
  teams: ITeam[]
}

const initialState: TeamState = {
  teams: [],
}

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    addTeam: (state: TeamState, action: PayloadAction<ITeam>) => {
      state.teams.push(action.payload)
    },
    updateTeam: (state: TeamState, action: PayloadAction<ITeam>) => {
      state.teams = state.teams.map((team) =>
        team.name === action.payload.name ? action.payload : team
      )
    },
    deleteTeam: (state: TeamState, action: PayloadAction<number>) => {
      state.teams = state.teams.filter((team) => team.id !== action.payload)
    },
  },
})

export const { addTeam, updateTeam, deleteTeam } = teamSlice.actions

export default teamSlice.reducer
