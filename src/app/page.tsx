import Background from './_components/background'
import Navbar from './_components/navbar'
import Home from './_views/home'

export default async function App() {

  return (
    <>
      <Background />
      <main className="flex min-h-screen min-w-[100vw] flex-col items-center justify-center absolute z-99 xl:px-8">
        <Navbar />
        <Home />
      </main>
    </>
  )
}
