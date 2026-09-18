import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
import GalleryGrid from "@/components/GalleryGrid";

function Works() {
    return (
        <div className="relative min-h-screen flex flex-col bg-background">
            <div className="sticky top-0 z-50">
                <Header></Header>
                      
                <Navbar></Navbar>
            </div>

            <GalleryGrid></GalleryGrid>

            <div className="px-3 pt-10">
                <Footer></Footer>
            </div>


        </div>
    )
}

export default Works;