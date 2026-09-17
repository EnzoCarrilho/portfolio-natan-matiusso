import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import Footer from '@/components/Footer'
import MediaContainer from "@/components/MediaContainer";
import HeroRow from "@/components/HeroRow";
import video from "../assets/videos/video.mov";
import img1 from "../assets/projects/img1.jpeg"
import img2 from "../assets/projects/img2.jpg"

function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background ">
      
      <div className="sticky top-0 z-50">
        <Header></Header>

        <Navbar></Navbar>
      </div>
      

      <main className="flex-1 w-full py-4 px-3">

       <HeroRow
          mediaProps={{ videoSrc: video, images: [img1, img2] }}
          title="Natan Matiusso"
          description="Filmmaker e Editor"
        />

        <HeroRow
          mediaProps={{ videoSrc: video, images: [img1, img2] }}
          title="Um olho, várias linguagens."
          description="Matuzo é filmmaker e editor de vídeo. Em vez de se fixar em um único nicho, construiu um 
              repertório amplo — da urgência de uma campanha publicitária à delicadeza de um editorial de moda, 
              da cobertura de um evento ao vivo à clareza que um vídeo institucional exige."
          reverse
        />

      </main>

      <div className="px-3">
        <Footer></Footer>
      </div>
      
      
    </div>
  )
}

export default Home