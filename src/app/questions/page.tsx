'use client'

import QuestionTable from '@/components/QuestionTable'
import TableCard from '@/components/TableCard'
import QuestionTableHeader from '@/components/QuestionTableHeader'

export default function Questions() {
  return (
    <>
      <TableCard title={<QuestionTableHeader />}>
        <QuestionTable />
      </TableCard>
    </>
  )
}