'use client'

import { useState } from 'react'
import NavbarItem from './navbar-item'

export default function Navbar() {

  const [selected, setSelected] = useState<string | undefined>()
  const navItems = ['ART', 'ABOUT', 'VISIT', 'SHOP']

  return (
    <div className="absolute h-8 left-0 top-24 z-100 w-full text-center font-josefinSans text-sm font-black text-white flex flex-row justify-center items-center">
      {navItems.map((name, i) => (
        <NavbarItem
          key={i}
          name={name}
          selected={selected === name}
          setSelected={setSelected}
        />
      ))}
    </div>
  )
}
