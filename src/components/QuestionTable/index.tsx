import React from 'react'
import { Button, Table } from 'antd'
import { IQuestion } from '@/models/Question'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/modules/store/store'
import { deleteQuestion } from '@/modules/store/reducers/questionSlice'

interface Prop {
  questionsData?: IQuestion[]
}



const QuestionTable: React.FC<Prop> = ({ questionsData }) => {
  const dispatch = useDispatch()

  const questions = questionsData
    ? questionsData
    // eslint-disable-next-line react-hooks/rules-of-hooks
    : useSelector((state: RootState) => state.questions.questions)

  const deleteQuestionHandler = (id: number) => {
    dispatch(deleteQuestion(id))
  }

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
    {
      title: 'Категорія',
      dataIndex: 'category',
      key: 'category',
      render: (category: any) => category?.name,
    },
    {
      title: 'Дії',
      dataIndex: 'id',
      key: 'id',
      render: (id: number) => (
        <Button danger onClick={() => deleteQuestionHandler(id)}>Видалити</Button>
      ),
    },
  ]

  return (
    <>
      <Table dataSource={questions} columns={columns} pagination={{ position: ['none', 'none'] }} />
    </>
  );
};

export default QuestionTable;
