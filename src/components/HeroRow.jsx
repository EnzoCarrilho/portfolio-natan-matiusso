import MediaContainer from "@/components/MediaContainer";

function HeroRow({ mediaProps, title, description, reverse = false }) {
  return (
    <div className={`flex flex-col items-center pb-6 gap-6 md:flex-row md:px-20 lg:px-24 md:pt-10 md:pb-14 ${reverse ? "md:flex-row-reverse" : ""}`}>
      <div className="order-2 md:order-none flex items-center justify-center w-full md:w-1/2">
        <MediaContainer {...mediaProps} flip={reverse} />
      </div>

      <div className="order-1 md:order-none flex flex-col items-center justify-center gap-2 md:gap-4 w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl lg:text-6xl text-primary font-bold font-mono text-center">
          {title}
        </h2>
        {description && (
          <p className="text-base md:text-2xl lg:text-2xl text-center text-secondary-text font-serif">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
export default HeroRow;