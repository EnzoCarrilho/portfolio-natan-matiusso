import { useEffect, useRef } from "react";

import projeto1 from "@/assets/projects/img1.jpeg";
import projeto2 from "@/assets/projects/img2.jpg";
import projeto3 from "@/assets/projects/img3.jpg";

const images = [
  { url: projeto1, title: "Projeto 1" },
  { url: projeto2, title: "Projeto 2" },
  { url: projeto3, title: "Projeto 3" },
];

const MIN_SCALE = 0.92;
const MAX_SCALE = 1.08;
const MIN_OPACITY = 0.5;

const MOBILE_SCROLL_SPEED = 0.6; // px por frame (~36px/s)
const INTERACTION_PAUSE_MS = 600; // pausa o autoplay após o usuário mexer

export default function Carousel() {
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);
  const mobileTrackRef = useRef(null);
  const scalesRef = useRef({ desktop: [], mobile: [] });
  const lastInteractionRef = useRef(0);

  // 3 cópias: dá um "buffer" de conteúdo idêntico pra rolar pros dois lados
  // sem nunca ver a borda real do scroll
  const desktopImages = [...images, ...images];
  const mobileImages = [...images, ...images, ...images];

  useEffect(() => {
    let frameId;
    const mql = window.matchMedia("(min-width: 1024px)");
    const mobileEl = mobileRef.current;

    // Marca interação manual para pausar o autoplay por um instante
    const markInteraction = () => {
      lastInteractionRef.current = Date.now();
    };
    mobileEl?.addEventListener("touchstart", markInteraction, { passive: true });
    mobileEl?.addEventListener("touchmove", markInteraction, { passive: true });
    mobileEl?.addEventListener("wheel", markInteraction, { passive: true });

    // Posiciona o scroll no "meio" do conteúdo triplicado ao montar
    const initMobileScroll = () => {
      if (!mobileEl || !mobileTrackRef.current) return;
      const unit = mobileTrackRef.current.scrollHeight / 3;
      if (unit > 0 && mobileEl.scrollTop < unit * 0.5) {
        mobileEl.scrollTop = unit;
      }
    };
    initMobileScroll();

    const animateScaleAxis = (container, key, axis) => {
      if (!container) return;

      const cards = container.querySelectorAll(".gallery-card");
      const viewportSize = axis === "x" ? window.innerWidth : window.innerHeight;
      const center = viewportSize / 2;
      const maxDistance = center;

      if (scalesRef.current[key].length !== cards.length) {
        scalesRef.current[key] = new Array(cards.length).fill(MIN_SCALE);
      }

      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        const start = axis === "x" ? rect.left : rect.top;
        const size = axis === "x" ? rect.width : rect.height;
        const end = start + size;

        if (end < -100 || start > viewportSize + 100) return;

        const cardCenter = start + size / 2;
        const distance = Math.abs(center - cardCenter);
        const t = Math.min(distance / maxDistance, 1);

        const targetScale = MAX_SCALE - t * (MAX_SCALE - MIN_SCALE);
        const current = scalesRef.current[key][i];
        const smoothed = current + (targetScale - current) * 0.1;
        scalesRef.current[key][i] = smoothed;

        const opacity = 1 - t * (1 - MIN_OPACITY);

        card.style.transform = `scale3d(${smoothed}, ${smoothed}, 1)`;
        card.style.opacity = opacity;
      });
    };

    const driveMobileScroll = () => {
      if (!mobileEl || !mobileTrackRef.current) return;

      const idle = Date.now() - lastInteractionRef.current > INTERACTION_PAUSE_MS;
      if (idle) {
        mobileEl.scrollTop += MOBILE_SCROLL_SPEED;
      }

      // Reposiciona silenciosamente perto das bordas do buffer,
      // sempre mantendo o scroll "no meio" do conteúdo triplicado
      const unit = mobileTrackRef.current.scrollHeight / 3;
      if (unit > 0) {
        if (mobileEl.scrollTop < unit * 0.5) {
          mobileEl.scrollTop += unit;
        } else if (mobileEl.scrollTop > unit * 1.5) {
          mobileEl.scrollTop -= unit;
        }
      }
    };

    const loop = () => {
      if (mql.matches) {
        animateScaleAxis(desktopRef.current, "desktop", "x");
      } else {
        driveMobileScroll();
        animateScaleAxis(mobileRef.current, "mobile", "y");
      }
      frameId = requestAnimationFrame(loop);
    };

    frameId = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(frameId);
      mobileEl?.removeEventListener("touchstart", markInteraction);
      mobileEl?.removeEventListener("touchmove", markInteraction);
      mobileEl?.removeEventListener("wheel", markInteraction);
    };
  }, []);

  return (
    <>
      {/* Desktop (lg+): marquee horizontal automático via CSS */}
      <div ref={desktopRef} className="hidden lg:flex overflow-hidden py-16 w-full h-full select-none">
        <div className="flex gap-4 shrink-0 animate-marquee pr-4">
          {desktopImages.map((img, i) => (
            <CardItem key={`a-${i}`} img={img} />
          ))}
        </div>
        <div className="flex gap-4 shrink-0 animate-marquee pr-4" aria-hidden="true">
          {desktopImages.map((img, i) => (
            <CardItem key={`b-${i}`} img={img} />
          ))}
        </div>
      </div>

      {/* Mobile + Tablet: scroll infinito controlado via JS (sem animação CSS) */}
      <div
        ref={mobileRef}
        className="flex lg:hidden flex-col overflow-y-auto overflow-x-hidden overscroll-contain w-full h-full select-none scrollbar-hide"
      >
        <div ref={mobileTrackRef} className="flex flex-col items-center gap-4 pt-24 pb-4">
          {mobileImages.map((img, i) => (
            <CardItem key={`m-${i}`} img={img} mobile />
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