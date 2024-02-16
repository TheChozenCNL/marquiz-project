'use client'

import React, { useState, useEffect } from 'react'
import { Flex, Typography, Button, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import s from './style.module.scss'
import Timer from '../Timer'
import { RootState } from '@/modules/store/store'
import {
  startGame,
  showAnswer,
  nextRound,
  endGame,
} from '@/modules/store/reducers/gameReducer'
import { resetTimer } from '@/modules/store/reducers/timerSlice'
import { IStartGame } from '@/models/StartGame'
import { useRouter } from 'next/navigation'
import CategorySelect from '@/components/CategoryModal'
import CategoryModal from '@/components/CategoryModal'
import { IQuestion } from '@/models/Question'
import ImageWithText from '../ImageWithText'

const { Title } = Typography

const GameField: React.FC = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { isFinished } = useSelector((state: RootState) => state.timer)
  const { isShowAnswer, gameIsStarted, isStopGame, currentRound } = useSelector(
    (state: RootState) => state.game
  )

  const [modalVisible, setModalVisible] = useState(false)

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
  const [mixedQuestions, setMixedQuestions] = useState<IQuestion[]>([])

  const categories = useSelector(
    (state: RootState) => state.categories.categories
  )
  const questions = useSelector((state: RootState) => state.questions.questions)

  const questionsByCategory = mixedQuestions.filter(
    (question) => question.category?.id === selectedCategory
  )

  useEffect(() => {
    mixQuestions()
  }, [questions])

  const mixQuestions = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5)
    setMixedQuestions(shuffled)
  }

  const handleSelectCategory = (categoryId: number | null) => {
    setSelectedCategory(categoryId)
    setModalVisible(false)
  }

  const handleShowAnswer = () => {
    dispatch(showAnswer())
  }

  const handleNextRound = () => {
    dispatch(nextRound())
  }

  const handleStart = () => {
    if (selectedCategory === null) {
      message.error('Будь ласка, оберіть категорію')
      return
    }

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

  const handleOpenModal = () => {
    setModalVisible(true)
  }

  const handleCloseModal = () => {
    setModalVisible(false)
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
          <Title level={1} className={s.text}>
            {isShowAnswer
              ? questionsByCategory[currentRound - 1]?.answer.textAnswer
              : questionsByCategory[currentRound - 1]?.question.textQuestion}
          </Title>
          <div className={s.imageContainer}>
            {!isShowAnswer &&
              questionsByCategory[currentRound - 1]?.question.imgQuestion?.map(
                (img, index) => (
                  <div className={s.image} key={index}>
                    <ImageWithText
                      src={img}
                      text={`${index + 1}`}
                      alt={`фото ${index}`}
                    />
                  </div>
                )
              )}
          </div>
          {gameIsStarted && !isStopGame ? (
            <Button onClick={handleShowAnswer} className={s.btn}>
              Показати відповідь
            </Button>
          ) : null}
          {!gameIsStarted && (
            <>
              <Button onClick={handleStart} className={s.btn}>
                Поїхали
              </Button>
              <Button onClick={handleOpenModal} className={s.btn}>
                Обрати категорію
              </Button>
              <CategorySelect
                categories={categories}
                onSelectCategory={handleSelectCategory}
              />
            </>
          )}
          {isStopGame && (
            <>
              {currentRound < questionsByCategory.length && (
                <Button onClick={handleNextRound} className={s.btn}>
                  Наступний раунд
                </Button>
              )}
              <Button onClick={handleToResults} className={s.btn}>
                Таблиця результатів
              </Button>
            </>
          )}
          <CategoryModal
            categories={categories}
            onSelectCategory={handleSelectCategory}
            visible={modalVisible}
            onClose={handleCloseModal}
          />
        </div>
      </div>
    </div>
  )
}

export default GameField
