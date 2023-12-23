import { FaWhatsapp } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { FaInstagram } from "react-icons/fa"

export default function Contacts() {
  return (
    <span className='flex items-center justify-evenly w-full mt-8 py-20'>
      <span className='flex flex-col items-center justify-center text-slate-700 text-m font-josefinSans font-bold'>
        <FaWhatsapp className='size-24' />
        Whatsapp
      </span>
      <span className='flex flex-col items-center justify-center text-slate-700 text-m font-josefinSans font-bold'>
        <SiGmail className='size-24' />
        E-Mail
      </span>
      <span className='flex flex-col items-center justify-center text-slate-700 text-m font-josefinSans font-bold'>
        <FaInstagram className='size-24' />
        Instagram
      </span>
    </span>
  )
}