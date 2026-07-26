import { useEffect, useRef } from "react";

import projeto1 from "@/assets/projects/img1.jpeg";
import projeto2 from "@/assets/projects/img2.jpg";
import projeto3 from "@/assets/projects/img3.jpg";

const images = [
  { url: projeto1, title: "Projeto 1" },
  { url: projeto2, title: "Projeto 2" },
  { url: projeto3, title: "Projeto 3" },
];

export default function Carousel() {
  const containerRef = useRef(null);
  const displayImages = [...images, ...images];
  
  const currentScalesRef = useRef([])

  useEffect(() => {
    let frameId

    const updateFocus = () => {
      if (!containerRef.current) return;

      const cards = containerRef.current.querySelectorAll(".gallery-card")
      const center = window.innerWidth / 2

      if (currentScalesRef.current.length !== cards.length) {
        currentScalesRef.current = new Array(cards.length).fill(0.85);
      }

      for (let i = 0; i < cards.length; i++) {
        const card = cards[i]
        const rect = card.getBoundingClientRect()

        if (rect.right < -100 || rect.left > window.innerWidth + 100) continue

        const cardCenter = rect.left + rect.width / 2
        const distance = Math.abs(center - cardCenter)

        const targetScale = Math.max(0.85, 1.25 - distance / 700)
        
        const currentScale = currentScalesRef.current[i]
        const smoothedScale = currentScale + (targetScale - currentScale) * 0.1
        
        currentScalesRef.current[i] = smoothedScale

        const opacity = Math.max(0.4, 1 - distance / 800)

        card.style.transform = `scale3d(${smoothedScale}, ${smoothedScale}, 1)`
        card.style.opacity = opacity
      }

      frameId = requestAnimationFrame(updateFocus)
    };

    frameId = requestAnimationFrame(updateFocus)
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef} className="overflow-hidden py-16 w-full flex select-none">
      <div className="flex gap-4 shrink-0 animate-marquee pr-4">
        {displayImages.map((img, i) => (
          <CardItem key={`a-${i}`} img={img} />
        ))}
      </div>

      <div className="flex gap-4 shrink-0 animate-marquee pr-4" aria-hidden="true">
        {displayImages.map((img, i) => (
          <CardItem key={`b-${i}`} img={img} />
        ))}
      </div>
    </div>
  )
}

function CardItem({ img }) {
  return (
    <div className="gallery-card w-148 shrink-0 transform-gpu transition-opacity duration-300 ease-out">
      <img
        src={img.url}
        alt={img.title}
        className="w-full h-96 rounded-xl object-cover shadow-lg pointer-events-none"
      />
    </div>
  )
}