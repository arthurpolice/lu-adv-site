"use client"

import { useState } from "react"
import NavbarItem from "./navbar-item"

export default function Navbar() {
  const [selected, setSelected] = useState<string | undefined>()
  const navItems = [
    {
      label: "QUEM SOMOS",
      href: "#about-us",
    },
    {
      label: "AÇÕES",
      href: "#law-suits",
    },
    {
      label: "CONTATO",
      href: "#contact",
    },
  ]

  return (
    <div className="z-100 absolute left-0 top-24 flex h-8 w-full justify-center">
      <div className="flex w-full flex-row items-center justify-evenly text-center font-josefinSans text-sm font-black text-white xl:w-2/3">
        {navItems.map((item, i) => (
          <NavbarItem
            key={i}
            name={item.label}
            selected={selected === item.label}
            setSelected={setSelected}
            href={item.href}
          />
        ))}
      </div>
    </div>
  )
}
