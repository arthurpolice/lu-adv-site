interface NavbarItemProps {
  name: string
  selected: boolean
  setSelected: (name: string) => void
}

export default function NavbarItem({ name, selected, setSelected }: NavbarItemProps) {
  return (
    <span
      onClick={() => setSelected(name)}
      className='relative px-20 tracking-widest flex flex-col items-center cursor-pointer'
    >
      {name}
      <span className={`transition-all ease-in-out duration-200 ${selected ? 'bg-[#cd5c5c] w-10 h-[2px]' : 'w-0 h-0'}`} />
    </span>
  )
}
