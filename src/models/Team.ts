import { IRound } from './Round'
export interface ITeam {
    id: number
    name: string
    rounds: IRound[]
    points: number
}