'use client'

import React, { useState } from 'react'
import { Modal, Form, Input, Button } from 'antd'
import { ITeam } from '@/models/Team'
import { useSelector } from 'react-redux'
import { RootState } from '@/modules/store/store'

interface Props {
  visible: boolean
  onCreate: (values: ITeam) => void
  onCancel: () => void
  roundNumber: number
}

const TeamFormModal: React.FC<Props> = ({
  visible,
  onCreate,
  onCancel,
  roundNumber,
}) => {
  const [form] = Form.useForm()
  const [roundPoints, setRoundPoints] = useState<number[]>(
    new Array(roundNumber).fill(0)
  )
  const teams = useSelector((state: RootState) => state.teams.teams)

  console.log(teams)
  const onFinish = (values: any) => {
    const totalPoints = roundPoints.reduce((acc, val) => acc + val, 0)
    form.setFieldsValue({ points: totalPoints })
    onCreate({
      id: teams.length + 1,
      ...values,
      points: totalPoints,
      rounds: roundPoints.map((roundPoints, index) => ({
        roundNumber: index + 1,
        roundPoints,
      })),
    })
    form.resetFields()
    setRoundPoints(new Array(roundNumber).fill(0))
  }

  const onRoundPointsChange = (value: string, index: number) => {
    const newRoundPoints = [...roundPoints]
    newRoundPoints[index] = parseFloat(value) || 0
    setRoundPoints(newRoundPoints)
  }

  const fillRoundPointsForExistingTeam = (teamName: string) => {
    const existingTeam = teams.find((team) => team.name === teamName)
    if (existingTeam) {
      const roundPoints = existingTeam.rounds.map((round) => round.roundPoints)
      setRoundPoints(roundPoints)

      roundFields.forEach((field, index) => {
        const value = existingTeam.rounds[index]?.roundPoints || 0
        form.setFieldsValue({ [field.name]: value })
      })
      return
    }
    roundFields.forEach((field, index) => {
      const value = 0
      form.setFieldsValue({ [field.name]: value })
    })
  }
  const roundFields = new Array(roundNumber).fill(null).map((_, index) => ({
    name: `rounds[${index}].roundPoints`,
    label: `Раунд ${index + 1}`,
    children: (
      <Input
        defaultValue={0}
        onChange={(e) => onRoundPointsChange(e.target.value, index)}
      />
    ),
  }))

  return (
    <Modal
      visible={visible}
      title="Додати команду"
      okText="Додати"
      cancelText="Скасувати"
      onCancel={onCancel}
      onOk={() => {
        form.validateFields().then((values) => {
          form.resetFields()
          onFinish(values)
        })
      }}
    >
      <Form form={form} layout="vertical" name="team_form">
        <Form.Item
          name="name"
          label="Назва команди"
          rules={[
            { required: true, message: 'Будь ласка, введіть назву команди' },
          ]}
        >
          <Input
            onChange={(e) => fillRoundPointsForExistingTeam(e.target.value)}
          />
        </Form.Item>
        {roundFields.map((field) => (
          <Form.Item key={field.name} name={field.name} label={field.label}>
            {field.children}
          </Form.Item>
        ))}
      </Form>
    </Modal>
  )
}

export default TeamFormModal
