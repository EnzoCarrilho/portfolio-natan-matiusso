import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Works from "@/pages/Works";
import Contact from "@/pages/Contact";
import CarouselPage from "@/pages/CarouselPage";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/works" element={<Works />} />

                <Route path="/contact" element={<Contact />} />

                <Route path="/carousel" element={<CarouselPage />} />

            </Routes>
        </BrowserRouter>
    );
}