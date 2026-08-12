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
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);
  const scalesRef = useRef({ desktop: [], mobile: [] });

  const displayImages = [...images, ...images];

  useEffect(() => {
    let frameId;
    const mql = window.matchMedia("(min-width: 768px)");

    const animateAxis = (container, key, axis) => {
      if (!container) return;

      const cards = container.querySelectorAll(".gallery-card");
      const viewportSize = axis === "x" ? window.innerWidth : window.innerHeight;
      const center = viewportSize / 2;

      if (scalesRef.current[key].length !== cards.length) {
        scalesRef.current[key] = new Array(cards.length).fill(0.85);
      }

      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        const start = axis === "x" ? rect.left : rect.top;
        const size = axis === "x" ? rect.width : rect.height;
        const end = start + size;

        if (end < -100 || start > viewportSize + 100) return;

        const cardCenter = start + size / 2;
        const distance = Math.abs(center - cardCenter);

        const targetScale = Math.max(0.85, 1.25 - distance / 700);
        const current = scalesRef.current[key][i];
        const smoothed = current + (targetScale - current) * 0.1;
        scalesRef.current[key][i] = smoothed;

        const opacity = Math.max(0.4, 1 - distance / 800);

        card.style.transform = `scale3d(${smoothed}, ${smoothed}, 1)`;
        card.style.opacity = opacity;
      });
    };

    const loop = () => {
      if (mql.matches) {
        animateAxis(desktopRef.current, "desktop", "x");
      } else {
        animateAxis(mobileRef.current, "mobile", "y");
      }
      frameId = requestAnimationFrame(loop);
    };

    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <>
      {/* Desktop: marquee horizontal */}
      <div ref={desktopRef} className="hidden md:flex overflow-hidden py-16 w-full h-full select-none">
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

       {/* Tablet | Mobile - marquee vertical */}
        <div
            ref={mobileRef}
            className="flex md:hidden flex-col overflow-y-auto overflow-x-hidden overscroll-contain w-full h-full select-none scrollbar-hide"
          >
            <div className="flex flex-col items-center gap-4 shrink-0 animate-marquee-vertical pt-24 pb-4">
              {displayImages.map((img, i) => (
                <CardItem key={`c-${i}`} img={img} mobile />
              ))}
            </div>
            <div className="flex flex-col items-center gap-4 shrink-0 animate-marquee-vertical pb-4" aria-hidden="true">
              {displayImages.map((img, i) => (
                <CardItem key={`d-${i}`} img={img} mobile />
              ))}
            </div>
        </div>
    </>
  );
}

function CardItem({ img, mobile = false }) {
  return (
    <div
      className={`gallery-card ${mobile ? "w-[80vw] sm:w-[65vw]" : "w-148"} shrink-0 transform-gpu transition-opacity duration-300 ease-out`}
    >
      <img
        src={img.url}
        alt={img.title}
        className={`w-full ${mobile ? "h-[42vh] sm:h-[48vh]" : "h-96"} rounded-xl object-cover shadow-lg pointer-events-none`}
      />
    </div>
  );
}