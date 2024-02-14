// AddQuestionSection.jsx
import React, { useState } from 'react';
import { Button, Input, Modal, Select, Typography } from 'antd'
import s from './style.module.scss';
import { addQuestion } from '@/modules/store/reducers/questionSlice';
import { RootState } from '@/modules/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { ICategory } from '@/models/Category';

const { Text,  } = Typography

const AddQuestionSection = () => {
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const dispatch = useDispatch();
  const questions = useSelector((state: RootState) => state.questions.questions);
  const categories = useSelector((state: RootState) => state.categories.categories);

  const questionsByCategory = questions.filter((question) => question.category?.id === selectedCategory?.id);

  const handleAddQuestion = () => {
    const newQuestion = {
      id: questions.length + 1,
      question: question,
      answer: answer,
      category: selectedCategory,
    }
    dispatch(addQuestion(newQuestion))
    setQuestion('')
    setAnswer('')
    setSelectedCategory(null)
    setModalVisible(false)
  };

  return (
    <>
      <Button onClick={() => setModalVisible(true)}>Додати питання</Button>
      <Modal
        title="Додати питання"
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setModalVisible(false)}>Відміна</Button>,
          <Button key="submit" type="primary" onClick={handleAddQuestion}>Додати</Button>,
        ]}
      >
        <div className={s.addQuestionSection}>
          <Input
            placeholder="Питання"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <Input
            placeholder="Відповідь"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <Select
            placeholder="Категорія"
            value={selectedCategory?.name}
            onChange={(value) => {
              const category = categories?.find(cat => cat.name === value);
              setSelectedCategory(category || null);
            }}
          >
            {categories?.map((category) => (
              <Select.Option key={category.id} value={category.name}>{category.name}</Select.Option>
            ))}
          </Select>
          {selectedCategory && questionsByCategory.length < 3 && (
            <Text type="danger">Потрібно ще додати хоча б {3 - questionsByCategory.length} питання</Text>
          )}
        </div>
      </Modal>
    </>
  );
};

export default AddQuestionSection
