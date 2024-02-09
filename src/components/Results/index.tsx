'use client'

import { Typography, Button } from 'antd'
import TeamsTable from '../TeamTable'
import { IRound } from '@/models/Round'
import { ITeam } from '@/models/Team'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/modules/store/store'
import { useRouter } from 'next/navigation'
import { updateTeam } from '@/modules/store/reducers/teamSlice'
import s from './style.module.scss'

const { Title } = Typography

function Results() {
  const router = useRouter()
  const gameData = useSelector((state: RootState) => state.game)
  const dispatch = useDispatch()

  if (gameData.gameIsStarted) {
    //change route to game route
    router.push('/')
  }

  const round1: IRound = {
    roundNumber: 1,
    roundPoints: 20,
  }

  const round2: IRound = {
    roundNumber: 2,
    roundPoints: 15,
  }

  const round3: IRound = {
    roundNumber: 3,
    roundPoints: 25,
  }

  // Mock data for ITeam interface
  const team: ITeam = {
    id: 1,
    name: 'Team A',
    rounds: [round1, round2, round3],
    points: 60,
  }

  const handleAddtoTeam = () => {
    if (gameData.team) {
      const team: ITeam = gameData.team
      dispatch(updateTeam(team))
    }
  }

  return (
    <div className={s.container}>
      <div className={s.result}>
        <Title level={2}>Результати гри</Title>
        <Button onClick={() => handleAddtoTeam()}>Додати результат</Button>
      </div>
      <TeamsTable teamData={team} />
      <Title level={2}>Результати інших команд</Title>
      <TeamsTable setPagination={true} />
    </div>
  )
}

export default Results
