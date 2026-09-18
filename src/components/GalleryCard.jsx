export default function GalleryCard({ item }) {
  return (
    <div className="rounded-xl overflow-hidden">
      {item.archive_type === "video" ? (
        <video
          src={item.src}
          controls
          className="w-full h-[240px] md:h-[25vh] lg:h-[50vh] object-cover rpunded-xl"
        />
      ) : (
        <img
          src={item.src}
          alt={item.title}
          loading="lazy"
          className="w-full h-[240px] md:h-[25vh] lg:h-[50vh] object-cover rounded-xl"
        />
      )}
      <div className="flex justify-between items-center px-3 pt-3">
        <p className="text-sm text-secondary-text">{item.title}</p>
        <span className="text-sm text-secondary-text">{item.type}</span>
      </div>
    </div>
  );
}