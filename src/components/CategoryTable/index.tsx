'use client'

import { RootState } from '@/modules/store/store'
import { ICategory } from '@/models/Category'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCategory } from '@/modules/store/reducers/categorySlice'
import { Button, Table } from 'antd'

interface Prop {
  categoriesData?: ICategory[]
}

const QuestionTable: React.FC<Prop> = ({ categoriesData }) => {
  const dispatch = useDispatch()

  const categories = categoriesData
    ? categoriesData
    : useSelector((state: RootState) => state.categories.categories)

  const deleteCategoryHandler = (id: number) => {
    dispatch(deleteCategory(id))
  }

  const columns = [
    {
      title: '№',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Назва',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Дії',
      dataIndex: 'id',
      key: 'id',
      render: (id: number) => (
        <Button danger onClick={() => deleteCategoryHandler(id)}>Видалити</Button>
      ),
    },
  ]

  return (
    <>
      <Table dataSource={categories} columns={columns} pagination={{ position: ['none', 'none'] }} />
    </>
  )
}

export default QuestionTable

