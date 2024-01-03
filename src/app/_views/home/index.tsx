import ProfilePicture from "~/app/_components/profile-picture"
import LawSuiteType from '~/app/_components/law-suite-type'
import Contacts from '~/app/_components/contacts'
import GridItem from './components/grid-item'
import Footer from '~/app/_components/footer'

export default function Home() {
  return (
    <div className='min-h-screen w-full'>
      <div className="grid h-full min-h-screen w-full grid-cols-6 bg-transparent px-6 pt-44 xl:grid-cols-12 xl:px-12">
        <GridItem position='left' id='start' startRow='row-start-2'>
          <ProfilePicture />
          <h2 className="text-center font-diphylleia text-5xl font-bold tracking-wider text-slate-700">
            Luciana Police
          </h2>
          <h2 className="text-center font-diphylleia text-3xl font-bold tracking-wider text-slate-700">
            Advogada
          </h2>
          <div className="my-4 h-[1px] w-1/2 bg-slate-700" />
          <p className="text-center font-josefinSans text-2xl font-thin text-slate-700">
            Excelência em Direito Médico e da Saúde
          </p>
        </GridItem>
        <GridItem position='right' id='about-us' startRow='row-start-3'>
          <h2 className="text-center font-diphylleia text-4xl font-bold tracking-wider text-slate-700 mb-6">Quem Somos</h2>
          <p className="text-center font-josefinSans text-2xl font-thin text-slate-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            scelerisque orci vel sapien scelerisque porta. Proin vehicula quam
            ac est pellentesque, a tristique ex pharetra. Proin porta lobortis
            ante sit amet pulvinar. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Mauris
            pulvinar cursus mattis. Sed nec massa ipsum. Vivamus semper tortor
            at tortor faucibus iaculis. Morbi at efficitur nulla, in laoreet
            magna. Proin semper eu libero quis porta.
          </p>
          <p className="text-center font-josefinSans text-2xl font-thin text-slate-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            scelerisque orci vel sapien scelerisque porta. Proin vehicula quam
            ac est pellentesque, a tristique ex pharetra. Proin porta lobortis
            ante sit amet pulvinar. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Mauris
            pulvinar cursus mattis. Sed nec massa ipsum. Vivamus semper tortor
            at tortor faucibus iaculis. Morbi at efficitur nulla, in laoreet
            magna. Proin semper eu libero quis porta.
          </p>
        </GridItem>
        <GridItem position='left' id='law-suits' startRow='row-start-4'>
          <h2 className="text-center font-diphylleia text-4xl font-bold tracking-wider text-slate-700 mb-6">Ações</h2>
          <div className='flex flex-col justify-between h-2/3 w-full items-start'>
            <LawSuiteType />
            <LawSuiteType />
            <LawSuiteType />
            <LawSuiteType />
            <LawSuiteType />
          </div>
        </GridItem>
        <GridItem position='right' id='contact' startRow='row-start-5'>
          <h2 className="text-center font-diphylleia text-4xl font-bold tracking-wider text-slate-700 mb-6" id='contact'>Contato</h2>
          <Contacts />
        </GridItem>
      </div>
      <Footer />
    </div>
  )
}
