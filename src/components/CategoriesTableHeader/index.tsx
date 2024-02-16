import s from '@/components/QuestionTableHeader/style.module.scss'
import AddCategorySection from '@/components/AddCategory'
import React from 'react'


const CategoriesTableHeader = () => {
  return (
    <>
      <div className={s.tableHeader}>
        <div className={s.firstBlock}>
          <div>Категорії</div>
        </div>
        <div>
          <AddCategorySection />
        </div>
      </div>
    </>
  )
}

export default CategoriesTableHeader