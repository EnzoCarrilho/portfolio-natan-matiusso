import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import Carousel from "@/components/Carousel"

function Home() {
  return (
    <div className="relative h-screen min-h-screen overflow-hidden main-background flex flex-col">
      <Header />

      <div className="relative flex-1 min-h-0 md:static md:flex md:flex-col">
      
        <div className="absolute top-0 left-0 right-0 z-20 md:static">
          <Navbar />
        </div>

      
        <main className="h-full w-full md:flex-1 md:flex md:items-center md:justify-center">
          <Carousel />
        </main>

      </div>
    </div>
  )
}

export default Home