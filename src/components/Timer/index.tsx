import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/modules/store/store'
import {
  decrementRemainingTime,
  setRemainingTime,
} from '@/modules/store/reducers/timerSlice'
import { formatTime } from '@/lib/formatTime'
import { Typography } from 'antd'

const { Title } = Typography

interface Props {
  minutes: number
}

const CooldownTimer: React.FC<Props> = ({ minutes }) => {
  const dispatch = useDispatch()
  const { isFinished, remainingTime } = useSelector(
    (state: RootState) => state.timer
  )

  const tickSound = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingTime > 0 && !isFinished) {
        dispatch(decrementRemainingTime())
        if (tickSound.current) {
          tickSound.current.play()
        }
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [dispatch, remainingTime])

  useEffect(() => {
    dispatch(setRemainingTime(minutes * 60))
  }, [dispatch])

  return (
    <>
      <Title level={3} style={{color: 'white'}}>{formatTime(remainingTime)}</Title>
      <audio ref={tickSound} src="sound.mp3" />
    </>
  )
}

export default CooldownTimer
