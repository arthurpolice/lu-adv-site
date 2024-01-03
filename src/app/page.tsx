import Background from './_components/background'
import Navbar from './_components/navbar'
import Home from './_views/home'

export default async function App() {

  return (
    <>
      <Background />
      <main className="flex max-h-[100dvh] min-w-[90vw] flex-col items-center justify-center absolute z-99 overflow-y-scroll">
        <Navbar />
        <Home />
      </main>
    </>
  )
}
