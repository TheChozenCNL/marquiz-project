import React, { useState } from 'react';
import { Button, Input, Modal } from 'antd';
import s from './style.module.scss';
import { addQuestion } from '@/modules/store/reducers/questionSlice';
import { RootState } from '@/modules/store/store';
import { useDispatch, useSelector } from 'react-redux';

const AddQuestionSection = () => {
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false); // Стан для керування видимістю модального вікна
  const dispatch = useDispatch();
  const questionsLength = useSelector((state: RootState) => state.questions.questions).length;

  const handleAddQuestion = () => {
    const newQuestion = {
      id: questionsLength + 1,
      question: question,
      answer: answer,
    };
    dispatch(addQuestion(newQuestion));
    setQuestion('');
    setAnswer('');
    setModalVisible(false);
  };

  return (
    <>
      <Button  onClick={() => setModalVisible(true)}>Додати питання</Button>
      <Modal
        title="Додати питання"
        visible={modalVisible}
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
        </div>
      </Modal>
    </>
  );
};

export default AddQuestionSection;
