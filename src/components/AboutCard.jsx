function AboutCard({title, text}) {
    return(
         <div className="flex flex-col bg-surface p-3 gap-2">
              <h3 className="font-serif text-secondary">{title}</h3>
              <p className="break-words text-secondary-text font-sans">{text}</p>
        </div>
    )
}

export default AboutCard;