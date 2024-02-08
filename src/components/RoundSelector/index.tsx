import { setRoundCount } from '@/modules/store/reducers/roundSlice'
import { Select } from 'antd'
import { useDispatch } from 'react-redux'
import s from './style.module.scss'

const roudnsOption = [
  {
    label: '3 раунди',
    value: 3,
  },
  {
    label: '6 раунди',
    value: 6,
  },
  {
    label: '9 раунди',
    value: 9,
  },
  {
    label: '12 раунди',
    value: 12,
  },
]

function RoundSelector() {
  const dispatch = useDispatch()
  const handleSelectCountOfRounds = (value: number) => {
    dispatch(setRoundCount(value))
  }
  return (
    <Select
      style={{ marginLeft: '15px' }}
      className={s.roundSelect}
      placeholder="Виберіть кількість раундів"
      onChange={handleSelectCountOfRounds}
      options={roudnsOption}
    />
  )
}

export default RoundSelector
