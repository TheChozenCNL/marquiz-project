import React from 'react'
import CategoryTable from '@/components/CategoryTable'
import TableCard from '@/components/TableCard'
import CategoriesTableHeader from '@/components/CategoriesTableHeader'



export default function Page() {
  return (
    <TableCard title={<CategoriesTableHeader />}>
      <CategoryTable />
    </TableCard>
  )
}
