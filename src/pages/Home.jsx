import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import MediaContainer from "@/components/MediaContainer";
import video from "../assets/videos/video.mov";
import img1 from "../assets/projects/img1.jpeg"
import img2 from "../assets/projects/img2.jpg"

function Home() {
  return (
    <div className="relative h-screen min-h-screen flex flex-col bg-background">
      
      <Header></Header>

      <Navbar></Navbar>

      <main className="h-full w-full py-4">

        <div className="flex px-32">

          <div className="flex items-center justify-center w-1/2">
            <MediaContainer videoSrc={video} images={[img1, img2]} title="asdfljkn" description="asdfjasdjfsdfnasldjfasjdfbaksdjfbaksdjfb"/>
          </div>

          <div className="flex flex-col items-center justify-around w-1/2">
            <h2 className="text-2xl text-primary font-bold">Natan Matiusso</h2>
            <p className="text-center text-secondary-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
              text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took 
              a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, 
              but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently 
              with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.
            </p>
          </div> 
          
        </div>

         <div className="flex px-32">

          <div className="flex flex-col items-center justify-around w-1/2">
            <h2 className="text-2xl text-primary font-bold">Natan Matiusso</h2>
            <p className="text-center text-secondary-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
              text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took 
              a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, 
              but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently 
              with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.
            </p>
          </div> 

          <div className="flex items-center justify-center w-1/2">
            <MediaContainer videoSrc={video} images={[img1, img2]} flip/>
          </div>
          
        </div>

      </main>
      
    </div>
  )
}

export default Home