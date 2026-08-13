import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import Carousel from "@/components/Carousel"

function CarouselPage() {
  return (
    <div className="relative h-screen overflow-hidden main-background flex flex-col">
      <Header />

      <div className="relative flex-1 min-h-0 lg:static lg:flex lg:flex-col">
        <div className="absolute top-0 left-0 right-0 z-20 lg:static">
          <Navbar />
        </div>

        <main className="h-full w-full lg:flex-1 lg:flex lg:items-center lg:justify-center">
          <Carousel />
        </main>
      </div>
    </div>
  )
}

export default CarouselPage