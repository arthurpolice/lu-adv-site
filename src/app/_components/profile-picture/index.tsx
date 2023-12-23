import Image from 'next/image'

export default function ProfilePicture() {
  return (
    <Image
      src="/profile.jpeg"
      alt="Foto da Advogada"
      width={250}
      height={250}
      className='rounded-full'
    />
  )
}