'use client'

import React, { useState } from 'react'
import { Flex, Statistic, Input, Typography, Button } from 'antd'
import type { CountdownProps } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import s from './style.module.scss'
import { answerQuestion } from '@/modules/store/reducers/gameReducer'

const { Countdown } = Statistic
const { Title } = Typography

interface Prop {
  question: string
}

const GameField: React.FC<Prop> = ({ question }) => {
  const [answer, setAnswer] = useState('')
  const dispatch = useDispatch()
  const handleAnswer = () => {
    dispatch(answerQuestion(answer))
    setAnswer('') // Сброс ответа после отправки
  }

  const deadline = Date.now() + 1000 * 60
  const onFinish: CountdownProps['onFinish'] = () => {
    console.log('finished!')
  }
  return (
    <div>
      <Flex justify="flex-end">
        <Countdown value={deadline} onFinish={onFinish} format="mm:ss" />
      </Flex>
      <div className={s.container}>
        <div className={s.gameSection}>
          <Title level={1}>{question}</Title>
          <Input value={answer} onChange={e => setAnswer(e.target.value)} placeholder="Введіть свою відповідь тут..." />
          <Button onClick={handleAnswer} className={s.btn} type="primary">
            Відповісти
          </Button>
        </div>
      </div>
    </div>
  )
}
export default GameField
