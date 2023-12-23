import Card from './components/card'

export default function Home() {
  return (
    <>
      <div className='pt-44 grid grid-cols-6 px-6 xl:grid-cols-12 w-full h-full xl:px-12 bg-transparent min-h-screen'>
        <div className='col-left xl:col-left-xl'>
          <Card><h1>Left</h1></Card>
        </div>
        <div className='p-4 col-right row-start-2 xl:col-right-xl'>
          <Card><h1>Right</h1></Card>
        </div>
      </div>
    </>
  )
}