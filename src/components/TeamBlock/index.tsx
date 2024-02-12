'use client'
import TeamsTable from '@/components/TeamTable'
import TableCard from '@/components/TableCard'
import TeamTableHeader from '@/components/TeamTableHeader'
import { Button } from 'antd'
import { useRouter, usePathname } from 'next/navigation'
import { AppRoutes } from '@/utils/constants'
import s from './style.module.scss'

export default function TeamBlock() {
  const router = useRouter()
  const pathname = usePathname()

  const handleStartGame = () => {
    router.push(AppRoutes.GAME)
  }

  return (
    <>
      <TableCard title={<TeamTableHeader />}>
        <TeamsTable />
      </TableCard>
      {pathname === AppRoutes.TEAMS && (
        <div className={s.startButtonContainer}>
          <Button
            className={s.startButton}
            onClick={handleStartGame}
            type="primary"
          >
            Поїхали
          </Button>
        </div>
      )}
    </>
  )
}
