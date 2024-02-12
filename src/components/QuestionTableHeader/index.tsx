import React from 'react'
import s from './style.module.scss'
import AddQuestionSection from '../AddQuestion'
import AddCategory from '@/components/AddCategory'
import AddCategorySection from '@/components/AddCategory'


const QuestionTableHeader = () => {
  return (
    <>
      <div className={s.tableHeader}>
        <div className={s.firstBlock}>
          <div>Питання</div>
        </div>
        <div>
          <AddQuestionSection />
          <AddCategorySection />
        </div>
      </div>
    </>
  )
}

export default QuestionTableHeader