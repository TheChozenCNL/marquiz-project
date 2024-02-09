import { IFilter } from '@/models/Filter'
import { ITeam } from '@/models/Team'

export function getTeamNamesFilter(teams: ITeam[]) : IFilter[] {
  const uniqueTeams = Array.from(new Set(teams.map((team) => team.name)))

  return uniqueTeams.map((team) => ({ text: team, value: team }))
}
