import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
import AboutCard from "@/components/AboutCard"
import img from "@/assets/projects/img3.jpg";


function About() {
    return (
        <div className="relative min-h-screen flex flex-col bg-background">
          
          <div className="sticky top-0 z-50">
            <Header></Header>
          
            <Navbar></Navbar>
          </div>
    
          <main className="flex flex-col px-3 gap-4"> 
            <img src={img} alt="imagem perfil" className="h-110 w-full object-cover rounded-md"/>

            <AboutCard title="Sobre mim" text="asdkfjasdlkjfasldjflasdkjfalçksdjfaçlskdjfalsdkfj"/>

            <AboutCard title="Sobre mim" text="asdkfjasdlkjfasldjflasdkjfalçksdjfaçlskdjfalsdkfj"/>

            <AboutCard title="Sobre mim" text="asdkfjasdlkjfasldjflasdkjfalçksdjfaçlskdjfalsdkfj"/>

          </main>

          <div className="px-3 pt-10">
            <Footer></Footer>
          </div>
          
        </div>
    )
}

export default About;