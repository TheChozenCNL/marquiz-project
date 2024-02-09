import TeamsTable from '@/components/TeamTable'
import TableCard from '@/components/TableCard'
import TeamTableHeader from '@/components/TeamTableHeader'

export default function Teams() {
  return (
    <>
      <TableCard title={<TeamTableHeader />}>
        <TeamsTable />
      </TableCard>
    </>
  )
}
