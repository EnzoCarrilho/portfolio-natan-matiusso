import VideoPlayer from "@/components/VideoPlayer";

function MediaContainer({ videoSrc, images, flip = false }) {
  return (
    <div className={`relative w-full h-[420px] ${flip ? "md:scale-x-[-1]" : ""}`}>
      {/* Vídeo grande de fundo */}
      <div className="w-full h-full md:absolute md:top-0 md:left-0 md:z-10 md:w-4/5 md:h-4/5 overflow-hidden">
        <VideoPlayer
          src={videoSrc}
          className={`w-full h-full object-cover ${flip ? "md:scale-x-[-1]" : ""}`}
        />
      </div>

      {/* Imagem pequena - canto inferior esquerdo */}
      <div className="hidden md:block absolute bottom-0 -left-12 z-0 w-1/2 h-1/2 overflow-hidden shadow-lg">
        <img
          src={images[0]}
          alt=""
          className={`w-full h-full object-cover ${flip ? "scale-x-[-1]" : ""}`}
        />
      </div>

      {/* Imagem pequena - canto inferior direito */}
      <div className="hidden md:block absolute md:-bottom-1 lg:-bottom-4 lg:right-36 md:right-12 z-20 w-1/5 md:w-1/4 h-1/3 overflow-hidden shadow-lg">
        <img
          src={images[1]}
          alt=""
          className={`w-full h-full object-cover ${flip ? "scale-x-[-1]" : ""}`}
        />
      </div>
    </div>
  );
}

export default MediaContainer;