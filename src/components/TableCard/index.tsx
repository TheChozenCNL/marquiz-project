import { Card } from 'antd'

interface Props {
  children?: React.ReactNode
  title?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}


const TableCard: React.FC<Props> = ({ children, title, className, style }) => {
    const head = <div>{title}</div>
    const body = <div>{children}</div>
  
    return (
      <Card style={style} title={head}>
        {body}
      </Card>
    )
  }
  
  export default TableCard