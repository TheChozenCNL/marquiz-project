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
import { addTeam } from '@/modules/store/reducers/teamSlice'
import TeamFormModal from '../TeamFormModal'
import { useState } from 'react'

const { Title } = Typography

function Results() {
  const router = useRouter()
  const gameData = useSelector((state: RootState) => state.game)
  const dispatch = useDispatch()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [gameResult, setGameResult] = useState<undefined | ITeam>(undefined)
  const roundNumber = useSelector((state: RootState) => state.round.roundNumber)
  const teams = useSelector((state: RootState) => state.teams.teams)

  if (gameData.gameIsStarted) {
    router.push('/')
  }

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleCreate = (values: ITeam) => {
    if (teams.find((team) => team.name === values.name)) {
      dispatch(updateTeam(values))
      setGameResult(values)
      setIsModalVisible(false)
      return
    }
    dispatch(addTeam(values))
    setGameResult(values)
    setIsModalVisible(false)
  }

  return (
    <div className={s.container}>
      <div className={s.result}>
        <Title level={2} className={s.text}>
          Результати гри
        </Title>
        <div>
          <Button className={s.btn} onClick={showModal}>Додати результат</Button>
          <Button onClick={() => router.push('/game')}>Грати</Button>
        </div>
      </div>
      <TeamsTable
        teamData={gameResult}
        isResult
        setGameResult={setGameResult}
      />
      <Title level={2} className={s.text}>
        Результати інших команд
      </Title>
      <TeamsTable setPagination={true} />
      <TeamFormModal
        visible={isModalVisible}
        onCreate={handleCreate}
        onCancel={handleCancel}
        roundNumber={roundNumber}
      />
    </div>
  )
}

export default Results
