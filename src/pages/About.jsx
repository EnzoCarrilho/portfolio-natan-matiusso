import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
import AboutCard from "@/components/AboutCard"
import profileImg from "@/assets/images/profile_img.png"


function About() {
    return (
        <div className="relative min-h-screen flex flex-col bg-background">
          
          <div className="sticky top-0 z-50">
            <Header></Header>
          
            <Navbar></Navbar>
          </div>
    
          <main className="flex flex-col px-3 gap-4 lg:flex-row"> 
            <img src={profileImg} alt="imagem perfil" className="h-110 md:h-[calc(100vh-130px)]  w-full object-cover rounded-md lg:w-1/2"/>
            
            <div className="flex flex-col gap-3 lg:gap-4">

              <div className="flex flex-col bg-surface p-3 gap-2 md:p-4 rounded-lg ">
                <p 
                  className="break-words text-secondary-text font-bold font-sans text-base md:text-xl"
                  >
                    Olá me chamo Natan Matiusso, sou Filmaker e Editor Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                              
                  </p>
              </div>

              <AboutCard title="Sobre mim" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                                              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                              m."/>

              <AboutCard title="Sobre mim" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                                              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."/>
            
              <AboutCard title="Sobre mim" text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                   
                                                  cididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                                `}/>
              
              <AboutCard title="Sobre mim" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                                              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."/>
            
            </div>
          

          </main>

          <div className="px-3 pt-10">
            <Footer></Footer>
          </div>
          
        </div>
    )
}

export default About;