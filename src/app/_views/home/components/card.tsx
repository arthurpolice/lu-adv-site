interface CardProps {
  children?: React.ReactNode
}

export default function Card({ children }: CardProps) {
  return (
    <div className='w-full h-full bg-white/75 rounded-lg'>
      {children}
    </div>
  )
}