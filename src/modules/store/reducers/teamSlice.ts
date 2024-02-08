import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { ITeam } from "@/models/Team";

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
        setTeamPoints: (state: TeamState, action: PayloadAction<number>) => {
            state.teams.forEach((team) => {
                team.points = 0
                team.rounds.forEach((round) => {
                    team.points += round.roundPoints
                })
            })
        },
    },
})

export const { addTeam, setTeamPoints } = teamSlice.actions

export default teamSlice.reducer
