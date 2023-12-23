interface CardProps {
  children?: React.ReactNode
}

export default function Card({ children }: CardProps) {
  return (
    <div className='w-full min-h-[500px] bg-white/60 rounded-lg flex justify-center items-center flex-col my-6 p-4 xl:p-12'>
      {children}
    </div>
  )
}