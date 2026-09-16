import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import Footer from '@/components/Footer'
import MediaContainer from "@/components/MediaContainer";
import video from "../assets/videos/video.mov";
import img1 from "../assets/projects/img1.jpeg"
import img2 from "../assets/projects/img2.jpg"

function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background">
      
      <Header></Header>

      <Navbar></Navbar>

      <main className="flex-1 w-full py-4">

        <div className="flex px-32">

          <div className="flex items-center justify-center w-1/2">
            <MediaContainer videoSrc={video} images={[img1, img2]} title="asdfljkn" description="asdfjasdjfsdfnasldjfasjdfbaksdjfbaksdjfb"/>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 w-1/2">
            <h2 className="text-7xl text-primary font-bold font-mono">Natan Matiusso</h2>
            <p className="text-center text-secondary-text text-4xl font-serif">
              Filmmaker e Editor
            </p>
          </div> 
          
        </div>

        <div className="flex px-32 pt-10 pb-14">

          <div className="flex flex-col items-center justify-evenly w-1/2 ">
            <h2 className="text-7xl text-primary font-bold font-mono ">Um olho, várias linguagens.</h2>
            <p className="text-2xl text-center text-secondary-text font-serif">
              Matuzo é filmmaker e editor de vídeo. Em vez de se fixar em um único nicho, construiu um 
              repertório amplo — da urgência de uma campanha publicitária à delicadeza de um editorial de moda, 
              da cobertura de um evento ao vivo à clareza que um vídeo institucional exige.
            </p>
          </div> 

          <div className="flex items-center justify-center w-1/2">
            <MediaContainer videoSrc={video} images={[img1, img2]} flip/>
          </div>
          
        </div>

      </main>

      <Footer></Footer>
      
    </div>
  )
}

export default Home