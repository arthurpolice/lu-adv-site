import Card from './card'

interface GridItemProps {
  position: 'left' | 'right',
  id: string,
  startRow: string,
  children?: React.ReactNode
}

export default function GridItem({ children, id, position, startRow }: GridItemProps) {

  const classes = {
    left: 'col-left xl:col-left-xl',
    right: 'col-right xl:col-right-xl'
  }

  return (
    <div id={id} className={`${startRow} ${classes[position]}`}>
      <Card position={position}>
        {children}
      </Card>
    </div>
  )
}