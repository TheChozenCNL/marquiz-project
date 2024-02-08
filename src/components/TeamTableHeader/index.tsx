import AddTeamSection from '../AddTeam'
import RoundSelector from '../RoundSelector'
import s from './style.module.scss'
import { Select, Typography } from 'antd'

const { Title, Paragraph } = Typography

const TeamTableHeader = () => {
  return (
    <>
      <div className={s.tableHeader}>
        <div className={s.firstBlock}>
          <div>Команди</div>
          <RoundSelector />
        </div>
        <div>
          <AddTeamSection />
        </div>
      </div>
    </>
  )
}

export default TeamTableHeader
