import React from 'react'
import { Modal, Button } from 'antd'
import styles from './style.module.scss'

const CategoryModal = ({ categories, onSelectCategory, visible, onClose }: any) => {
  const handleSelectCategory = (categoryId: number) => {
    onSelectCategory(categoryId)
    onClose()
  }

  return (
    <Modal
      title="Обрати категорію"
      open={visible}
      onCancel={onClose}
      footer={null}
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          {categories.map((category: any) => (
            <Button
              key={category.id}
              onClick={() => handleSelectCategory(category.id)}
              className={styles.button}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    </Modal>
  )
}

export default CategoryModal
