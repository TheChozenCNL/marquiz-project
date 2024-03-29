'use client'

import React from 'react'
import { Card, Button, message, Radio } from 'antd'
import { useDispatch } from 'react-redux'
import { addCategories, resetCategoryState } from '@/modules/store/reducers/categorySlice'
import { resetGameState } from '@/modules/store/reducers/gameReducer'
import { addQuestions, resetQuestionState } from '@/modules/store/reducers/questionSlice'
import { resetRoundState } from '@/modules/store/reducers/roundSlice'
import { resetTeamState } from '@/modules/store/reducers/teamSlice'
import s from './style.module.scss'
import { useRouter } from 'next/navigation'
import { RollbackOutlined } from '@ant-design/icons'
import { IQuestion } from '@/models/Question'
import { defaultCategories, defaultQuestions } from '@/utils/constants'

const Settings: React.FC = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const handleResetCategory = () => {
    dispatch(resetCategoryState())
    message.success('Успішно повернуто до початкових категорій')
  }

  const handleResetTeams = () => {
    dispatch(resetTeamState())
    message.success('Успішно повернуто до початкових команд')
  }

  const handleResetQuestions = () => {
    dispatch(resetQuestionState())
    message.success('Успішно повернуто до початкових питань')
  }

  const handleResetGame = () => {
    dispatch(resetGameState())
    message.success('Успішно повернуто до початкових даних гри')
  }

  const handleResetRounds = () => {
    dispatch(resetRoundState())
    message.success('Успішно повернуто до початкових кількостей раундів')
  }

  const handleAddQuestions = () => {
    dispatch(addQuestions(defaultQuestions))
    message.success('Успішно додано питання')
  }

  const handleAddCategories = () => {
    dispatch(addCategories(defaultCategories))
    message.success('Успішно додано категорії')
  }

  return (
    <>
      <div className={s.pageContainer}>
        <Card className={s.pageCard} title={'Налаштування'}>
          <div style={{textAlign: 'center', marginBottom: '20px'}}>
            <Button type="primary" href="/categories">
              Категорії
            </Button>
            <Button type="primary" href="/questions">
              Питання
            </Button>
            <Button type="primary" href="/results">
              Результати
            </Button>
          </div>
          <div className={s.content}>
            <div>Повернути до початкових команд</div>
            <Button type="primary" onClick={handleResetTeams}>
              Повернути
            </Button>
          </div>
          <div className={s.content}>
            <div>Повернути до початкових питань</div>
            <Button type="primary" onClick={handleResetQuestions}>
              Повернути
            </Button>
          </div>
          <div className={s.content}>
            <div>Повернути до початкових кількості раундів</div>
            <Button type="primary" onClick={handleResetRounds}>
              Повернути
            </Button>
          </div>
          <div className={s.content}>
            <div>Повернути до початкових даних гри</div>
            <Button type="primary" onClick={handleResetGame}>
              Повернути
            </Button>
          </div>
          <div className={s.content}>
            <div>Додати категорії</div>
            <Button onClick={handleAddCategories}>
              Додати
            </Button>
          </div>
          <div className={s.content}>
            <div>Додати питання</div>
            <Button onClick={handleAddQuestions}>
              Додати
            </Button>
          </div>
          <Button
            type="primary"
            className={s.btn}
            onClick={() => router.push('/')}
          >
            <RollbackOutlined />
            Повернутиcя на головну
          </Button>
        </Card>
      </div>
    </>
  )
}

export default Settings
