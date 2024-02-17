import React from 'react'
import s from './style.module.scss'
import AddQuestionSection from '../AddQuestion'

const QuestionTableHeader = () => {
  return (
    <>
      <div className={s.tableHeader}>
        <div className={s.firstBlock}>
          <div>Питання</div>
        </div>
        <div>
          <AddQuestionSection />
        </div>
      </div>
    </>
  )
}

export default QuestionTableHeader