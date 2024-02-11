'use client'

import React from 'react'
import { Flex, Typography, Button } from 'antd'
import { useSelector } from 'react-redux'
import s from './style.module.scss'
import Timer from '../Timer'
import { RootState } from '@/modules/store/store'

const { Title } = Typography

interface Prop {
  question?: string
}

const GameField: React.FC<Prop> = ({ question }) => {
  const { isFinished } = useSelector((state: RootState) => state.timer)

  return (
    <div>
      <Flex justify="flex-end">
        <Timer minutes={1} />
      </Flex>
      <div className={s.container}>
        <div className={s.gameSection}>
          <Title level={1}>{question}</Title>
          {isFinished && <Button className={s.btn}>Показати відповідь</Button>}
        </div>
      </div>
    </div>
  )
}
export default GameField
