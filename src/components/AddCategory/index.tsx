import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/modules/store/store'
import { addCategory } from '@/modules/store/reducers/categorySlice'
import { Button, Input, Modal } from 'antd'
import s from './style.module.scss'

const AddCategorySection = () => {
  const [categoryName, setCategoryName] = useState<string>('')
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const dispatch = useDispatch()
  const categoriesLength = useSelector((state: RootState) => state.categories?.categories?.length ?? 0)

  const handleAddCategory = () => {
    dispatch(addCategory({
      id: (categoriesLength ?? 0) + 1,
      name: categoryName,
    }));
    setCategoryName('')
    setModalVisible(false)
  }


  return (
    <>
      <Button onClick={() => setModalVisible(true)}>Додати категорію</Button>
      <Modal
        title="Додати категорію"
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setModalVisible(false)}>Відміна</Button>,
          <Button key="submit" type="primary" onClick={handleAddCategory}>Додати</Button>,
        ]}
      >
        <div className={s.categoryInput}>
          <Input
            placeholder="Категорія"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>
      </Modal>
    </>
  )
}

export default AddCategorySection