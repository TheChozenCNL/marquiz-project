'use client'

import React from 'react'
import { Flex, Statistic, Input, Typography, Button } from 'antd'
import type { CountdownProps } from 'antd'
import s from './style.module.scss'

const { Countdown } = Statistic
const { Title } = Typography

interface Prop {
  question: string
}

const GameField: React.FC<Prop> = ({ question }) => {
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
          <Input placeholder="Введіть свою відповідь тут..." />
          <Button className={s.btn} type="primary">
            Відповісти
          </Button>
        </div>
      </div>
    </div>
  )
}
export default GameField

