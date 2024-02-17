import React from 'react'
import { Button, Table } from 'antd'
import { IQuestion } from '@/models/Question'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/modules/store/store'
import { addQuestion, deleteQuestion } from '@/modules/store/reducers/questionSlice'

interface Prop {
  questionsData?: IQuestion[]
}



const QuestionTable: React.FC<Prop> = ({ questionsData }) => {
  const dispatch = useDispatch()

  const questions = questionsData
    ? questionsData
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
      title: 'Категорія',
      dataIndex: 'category',
      key: 'category',
      render: (category: any) => category?.name,
    },
    {
      title: 'Питання',
      dataIndex: 'question',
      key: 'question',
      render: (question: any) => question?.textQuestion
    },
    {
      title: 'Відповідь',
      dataIndex: 'answer',
      key: 'answer',
      render: (answer: any) => answer?.textAnswer
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
