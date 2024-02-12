'use client'

import React from 'react'
import { Flex, Typography, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import s from './style.module.scss'
import Timer from '../Timer'
import { RootState } from '@/modules/store/store'
import { IQuestion } from '@/models/Question'
import {
  startGame,
  showAnswer,
  nextRound,
  endGame,
} from '@/modules/store/reducers/gameReducer'
import { resetTimer } from '@/modules/store/reducers/timerSlice'
import { IStartGame } from '@/models/StartGame'
import { useRouter } from 'next/navigation'

const { Title } = Typography

const GameField: React.FC = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { isFinished } = useSelector((state: RootState) => state.timer)
  const { isShowAnswer, gameIsStarted, isStopGame, currentRound } = useSelector(
    (state: RootState) => state.game
  )

  // change to real game questions when we they setup
  const testData: IQuestion[] = [
    {
      id: 1,
      category: { id: 1, name: 'Category A' },
      question: 'What is the capital of France?',
      answer: 'Paris',
    },
    {
      id: 2,
      category: { id: 2, name: 'Category B' },
      question: 'Who wrote "Romeo and Juliet"?',
      answer: 'William Shakespeare',
    },
    {
      id: 3,
      category: null,
      question: 'What is the chemical symbol for water?',
      answer: 'H2O',
    },
  ]
  const handeleShowAnswer = () => {
    dispatch(showAnswer())
  }

  const handleNextRound = () => {
    dispatch(nextRound())
  }

  const handleStart = () => {
    const startGameData: IStartGame = {
      gameIsStarted: true,
      countOfRounds: 3,
    }
    dispatch(startGame(startGameData))
  }

  const handleToResults = () => {
    dispatch(resetTimer())
    dispatch(endGame())
    router.push('/results')
  }
  return (
    <div>
      {gameIsStarted && !isStopGame && (
        <Flex justify="flex-end">
          <Timer minutes={1} />
        </Flex>
      )}
      <div className={s.container}>
        <div className={s.gameSection}>
          <Title level={1}>
            {isShowAnswer
              ? testData[currentRound - 1].answer
              : testData[currentRound - 1].question}
          </Title>
          {isFinished && !isStopGame ? (
            <Button onClick={handeleShowAnswer} className={s.btn}>
              Показати відповідь
            </Button>
          ) : null}
          {!gameIsStarted && (
            <Button onClick={handleStart} className={s.btn}>
              Поїхали
            </Button>
          )}
          {isStopGame && (
            <>
              {currentRound < testData.length && (
                <Button onClick={handleNextRound} className={s.btn}>
                  Наступний раунд
                </Button>
              )}
              <Button onClick={handleToResults} className={s.btn}>
                Таблиця результатів
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
export default GameField
