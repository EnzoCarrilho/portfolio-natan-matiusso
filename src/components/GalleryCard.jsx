import React from "react";

export default function GalleryCard({ item }) {
  const videoRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="group rounded-xl overflow-hidden">
      {item.archive_type === "video" ? (
        <video
          ref={videoRef}
          src={item.src}
          onClick={togglePlay}
          loop
          muted
          playsInline
          className="w-full h-[55vh] md:h-[25vh] lg:h-[35vh] xl:h-[45vh]  object-cover transition-transform duration-500 group-hover:scale-102 rounded-xl"
        />
      ) : (
        <img
          src={item.src}
          alt={item.title}
          loading="lazy"
          className="w-full h-[55vh] md:h-[25vh] lg:h-[35vh] xl:h-[45vh] object-cover transition-transform duration-500 group-hover:scale-102 rounded-xl"
        />
      )}
      <div className="flex justify-between items-center px-3 pt-3">
        <p className="text-base text-secondary-text transition-colors duration-300 group-hover:text-white lg:text:lg">
          {item.title}
        </p>
        <span className="text-base text-secondary-text transition-colors duration-300 group-hover:text-white lg:text-lg">
          {item.type}
        </span>
      </div>
    </div>
  );
}