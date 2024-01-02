import Link from 'next/link'

interface NavbarItemProps {
  name: string
  selected: boolean
  href: string
  setSelected: (name: string) => void
}

export default function NavbarItem({ name, selected, href, setSelected }: NavbarItemProps) {
  return (
    <Link
      href={href}
      onMouseEnter={() => setSelected(name)}
      onMouseLeave={() => setSelected('')}
      className='relative tracking-widest flex flex-col items-center cursor-pointer'
    >
      {name}
      <span className={`transition-all ease-in-out duration-200 ${selected ? 'bg-[#cd5c5c] w-10 h-[2px]' : 'w-0 h-0'}`} />
    </Link>
  )
}
