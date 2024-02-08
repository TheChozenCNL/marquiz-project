'use client'

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Input } from 'antd'
import s from './style.module.scss'
import { addTeam } from '@/modules/store/reducers/teamSlice'
import { RootState } from '@/modules/store/store'

function AddTeamSection() {
  const [teamName, setTeamName] = useState<string>('')
  const dispatch = useDispatch()
  const teamsLenth = useSelector((state: RootState) => state.teams.teams).length

  const handleAddTeam = () => {
    const newTeam = {
      id: teamsLenth + 1,
      name: teamName,
      rounds: [],
      points: 0,
    }
    dispatch(addTeam(newTeam))
    setTeamName('')
  }
  return (
    <div className={s.teamInput}>
      <div className={s.firstBlock}>
        <Input
          className={s.Input}
          placeholder="Введіть назву команди"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <Button onClick={handleAddTeam}>Додати команду</Button>
      </div>
    </div>
  )
}

export default AddTeamSection
