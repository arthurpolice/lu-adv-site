'use client'

import { useRef } from 'react'
import { useInViewport } from 'react-in-viewport'

interface CardProps {
  position: 'left' | 'right',
  children?: React.ReactNode
}

export default function Card({ position, children }: CardProps) {

  const cardRef = useRef<HTMLDivElement>(null)

  const {
    enterCount
  } = useInViewport(
    cardRef
  )

  const translateX = position === 'left' ? '-translate-x-48' : 'translate-x-48'

  return (
    <div ref={cardRef} className={`w-full min-h-[500px] bg-white/60 rounded-lg flex justify-center items-center flex-col my-6 p-4 xl:p-12 transition-all duration-[3000ms] ${enterCount > 0 ? "translate-x-0" : `opacity-0 ${translateX}`}`}>
      {children}
    </div>
  )
}