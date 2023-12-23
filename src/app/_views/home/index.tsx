import ProfilePicture from "~/app/_components/profile-picture"
import Card from "./components/card"
import LawSuiteType from '~/app/_components/law-suite-type'
import Contacts from '~/app/_components/contacts'

export default function Home() {
  return (
    <>
      <div className="grid h-full min-h-screen w-full grid-cols-6 bg-transparent px-6 pt-44 xl:grid-cols-12 xl:px-12">
        <div className="col-left xl:col-left-xl" id='start'>
          <Card>
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
          </Card>
        </div>
        <div className="col-right row-start-2 xl:col-right-xl" id='about-us'>
          <Card>
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
          </Card>
        </div>
        <div className="col-left xl:col-left-xl row-start-3" id='law-suits'>
          <Card>
            <h2 className="text-center font-diphylleia text-4xl font-bold tracking-wider text-slate-700 mb-6">Ações</h2>
            <div className='flex flex-col justify-between h-2/3 w-full items-start'>
              <LawSuiteType />
              <LawSuiteType />
              <LawSuiteType />
              <LawSuiteType />
              <LawSuiteType />
            </div>
          </Card>
        </div>
        <div className="col-right row-start-4 xl:col-right-xl">
          <Card>
            <h2 className="text-center font-diphylleia text-4xl font-bold tracking-wider text-slate-700 mb-6" id='contact'>Contato</h2>
            <Contacts />
          </Card>
        </div>
      </div>
    </>
  )
}
