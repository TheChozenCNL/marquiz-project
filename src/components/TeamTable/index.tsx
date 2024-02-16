import React, { Key } from 'react'
import { Button, Table } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/modules/store/store'
import { ITeam } from '@/models/Team'
import { getTeamNamesFilter } from '@/lib/uniqueTeamNames'
import { DeleteOutlined } from '@ant-design/icons'
import { deleteTeam } from '@/modules/store/reducers/teamSlice'

interface Prop {
  setPagination?: boolean
  teamData?: ITeam
  isResult?: boolean
  setGameResult?: React.Dispatch<React.SetStateAction<ITeam | undefined>>
}

const TeamsTable: React.FC<Prop> = ({
  setPagination = false,
  teamData,
  isResult = false,
  setGameResult,
}) => {
  const dispatch = useDispatch()
  const teams = useSelector((state: RootState) => {
    if (teamData) {
      return [teamData]
    } else {
      return state.teams.teams
    }
  })
  const roundNumber = useSelector((state: RootState) => state.round.roundNumber)

  const roundColumns = new Array(roundNumber).fill(null).map((_, index) => ({
    title: `Раунд ${index + 1}`,
    dataIndex: `rounds[${index + 1}].roundPoints`,
    key: `round_${index + 1}`,
    sorter: (a: ITeam, b: ITeam) => {
      const aPoints = a.rounds[index]?.roundPoints || 0
      const bPoints = b.rounds[index]?.roundPoints || 0
      return bPoints - aPoints
    },
    render: (text: string, record: ITeam) =>
      record.rounds[index]?.roundPoints || 0,
  }))

  let filters: { text: string; value: Key }[] = []
  if (teams && teams.length > 0) {
    filters = getTeamNamesFilter(teams)
  }

  const toolsColumns = [
    {
      dataIndex: 'delete',
      title: '',
      width: 50,
      render: (text: string, team: ITeam) => (
        <Button
          onClick={() => {
            dispatch(deleteTeam(team.id))
            if (setGameResult) {
              setGameResult(undefined)
            }
          }}
        >
          <DeleteOutlined />
        </Button>
      ),
    },
  ]

  const columns = [
    {
      title: '№',
      dataIndex: 'id',
      key: 'id',
      render: (text: string, record: ITeam, index: number) => (
        <span>{index + 1}</span>
      ),
    },
    {
      title: 'Команда',
      dataIndex: 'name',
      key: 'name',
      filters,
      onFilter: (value: boolean | Key, record: ITeam) =>
        typeof value === 'string' && record.name.includes(value),
    },
    ...roundColumns,
    {
      title: 'Ітогові бали',
      dataIndex: 'points',
      key: 'points',
      sorter: (a: ITeam, b: ITeam) => a.points - b.points,
    },
    ...toolsColumns,
  ]

  const sortedTeams = isResult
    ? teamData
      ? [teamData]
      : []
    : [...teams].sort((a, b) => b.points - a.points)
  return (
    <>
      <Table
        dataSource={sortedTeams}
        columns={columns}
        pagination={
          setPagination ? { position: ['bottomCenter', 'bottomCenter'] } : false
        }
      />
    </>
  )
}

export default TeamsTable
