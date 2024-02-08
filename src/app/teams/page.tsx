'use client'

import { useSelector } from 'react-redux'
import { RootState } from '@/modules/store/store'
import TeamsTable from '@/components/TeamTable'
import TableCard from '@/components/TableCard'
import TeamTableHeader from '@/components/TeamTableHeader'

export default function Teams() {
  const teams = useSelector((state: RootState) => state.teams.teams)
  return (
    <>
      <TableCard title={<TeamTableHeader />}>
        <TeamsTable teams={teams} />
      </TableCard>
    </>
  )
}
