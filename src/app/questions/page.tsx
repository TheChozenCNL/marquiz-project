'use client'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/modules/store/store'
import QuestionTable from '@/components/QuestionTable'
import TableCard from '@/components/TableCard'
import QuestionTableHeader from '@/components/QuestionTableHeader'
import { useEffect } from 'react'
import { IQuestion } from '@/models/Question'
import { addQuestion } from '@/modules/store/reducers/questionSlice'

export default function Questions() {
  const dispatch = useDispatch()
  const questions = useSelector((state: RootState) => state.questions.questions)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('@/data/questions.json');
        if (!response.ok) {
          throw new Error('Failed to fetch questions');
        }
        const data: IQuestion[] = await response.json();
        data.forEach(question => {
          dispatch(addQuestion(question));
        });
      } catch (error) {
        console.error('Error loading questions:', error);
      }
    };

    fetchData()
  }, [])

  return (
    <>
      <TableCard title={<QuestionTableHeader />}>
        <QuestionTable questions={questions} />
      </TableCard>
    </>
  )
}