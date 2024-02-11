import React from 'react'
import { Table } from 'antd'
import { IQuestion } from '@/models/Question'
import { useSelector } from 'react-redux'
import { RootState } from '@/modules/store/store'

interface Prop {
  questions?: IQuestion[]
}

const QuestionTable: React.FC<Prop> = ({ questions }) => {
  const columns = [
    {
      title: '№',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Питання',
      dataIndex: 'question',
      key: 'question',
    },
    {
      title: 'Відповідь',
      dataIndex: 'answer',
      key: 'answer',
    },
  ]

  return (
    <>
      <Table dataSource={questions} columns={columns} pagination={{ position: ['none', 'none'] }} />
    </>
  )
}

export default QuestionTable