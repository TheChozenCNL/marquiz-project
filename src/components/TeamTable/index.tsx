'use client'

import React from 'react'
import { Button, Table } from 'antd'
import { useSelector } from 'react-redux'
import { RootState } from '@/modules/store/store'
import { ITeam } from '@/models/Team'

const TeamsTable: React.FC = () => {
  const teams = useSelector((state: RootState) => state.teams.teams)
  const roundNumber = useSelector((state: RootState) => state.round.roundNumber)

  const roundColumns = new Array(roundNumber).fill(null).map((_, index) => ({
    title: `Раунд ${index + 1}`,
    dataIndex: `rounds[${index}].roundPoints`,
    key: `round_${index}`,
    render: (text: string, record: ITeam) =>
      record.rounds[index]?.roundPoints || 0,
  }))

  const columns = [
    {
      title: '№',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Команда',
      dataIndex: 'name',
      key: 'name',
    },
    ...roundColumns,
    {
      title: 'Ітогові бали',
      dataIndex: 'points',
      key: 'points',
    },
  ]

  const sortedTeams = [...teams].sort((a, b) => b.points - a.points)
  return (
    <>
      <Table
        dataSource={sortedTeams}
        columns={columns}
        pagination={{ position: ['none', 'none'] }}
      />
    </>
  )
}

export default TeamsTable
