import Background from './_components/background'
import Footer from './_components/footer'
import Navbar from './_components/navbar'
import Home from './_views/home'

export default async function App() {

  return (
    <>
      <Background />
      <main className="flex !fixed max-h-[100vh] min-w-[90vw] flex-col items-center justify-center z-99 overflow-y-scroll">
        <Navbar />
        <Home />
      </main>
    </>
  )
}
