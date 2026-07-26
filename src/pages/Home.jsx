import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import Carousel from "@/components/Carousel"

function Home() {

  return (
    <div className="relative min-h-screen overflow-hidden main-background flex flex-col">
        
          <Header />

          <Navbar />
      
        <main className="flex-1 flex items-center justify-center w-full">
          <Carousel />
        </main>
          
    </div>
  )
}

export default Home
