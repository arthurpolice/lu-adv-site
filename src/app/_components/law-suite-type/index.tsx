'use client'

import { useState } from 'react'
import { FaAngleRight } from 'react-icons/fa'

interface Props {
  name: string
  description: string
}

export default function LawSuiteType() {

  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <span className='flex items-center w-full gap-2' onClick={() => setOpen(!open)}>
        <FaAngleRight className={`text-slate-700 size-6 transition-all duration-500 ${open ? 'rotate-90' : ''}`} />
        <p className="text-center font-josefinSans text-2xl font-thin text-slate-700 cursor-pointer">
          Lorem ipsum dolor
        </p>
      </span>
      <span className='flex items-center w-full gap-2'>
        <p className={`text-pretty font-josefinSans text-2xl font-thin text-slate-700 py-4 pl-6 transition-all duration-[1500ms] overflow-hidden ${open ? "max-h-[800px] opacity-100 visible" : "max-h-0 opacity-0 invisible"}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          scelerisque orci vel sapien scelerisque porta. Proin vehicula quam
          ac est pellentesque, a tristique ex pharetra. Proin porta lobortis
          ante sit amet pulvinar. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Mauris
          pulvinar cursus mattis. Sed nec massa ipsum. Vivamus semper tortor
          at tortor faucibus iaculis. Morbi at efficitur nulla, in laoreet
          magna. Proin semper eu libero quis porta.
        </p>
      </span>
    </>
  )
}