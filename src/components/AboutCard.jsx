function AboutCard({title, text}) {
    return(
         <div className="flex flex-col bg-surface p-3 gap-4 md:p-4 rounded-lg ">
              <h3 className="font-serif text-secondary font-bold md:text-xl">{title}</h3>
              <p className="break-words text-secondary-text whitespace-pre-line font-sans text-sm md:text-lg">{text}</p>
        </div>
    )
}

export default AboutCard;