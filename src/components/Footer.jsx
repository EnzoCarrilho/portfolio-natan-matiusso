import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';


function Footer (){
    return(
        <footer className="flex flex-col items-center justify-evenly lg:grid lg:grid-cols-3 lg:items-start border-t-2 border-t-secondary/40 py-4 md:py-6 md:px-3 lg:py-8 lg:px-3 gap-6 md:gap-8">

            <div className="flex justify-between w-full lg:w-min px-2 lg:flex-col md:gap-2 lg:gap-4 lg:justify-self-center">
                <Link
                    to="/"
                    className="text-secondary-text font-sans hover:text-secondary md:text-xl lg:text-xl"
                >
                    Home
                </Link>

                <Link
                    to="/about"
                    className="text-secondary-text font-sans hover:text-secondary md:text-xl lg:text-xl"
                >
                    Sobre
                </Link>

                <Link 
                    to="/works" 
                    className="text-secondary-text font-sans hover:text-secondary md:text-xl lg:text-xl"
                >
                    Trabalhos
                </Link>

            </div>

            <div className='flex flex-col gap-2 items-center pb-4 md:gap-3 lg:gap-4'>
                <a 
                    href="https://instagram.com/natanmatiusso_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex items-center gap-1 md:gap-2'
                >
                    <FaInstagram className='w-4 h-4 md:w-6 md:h-6 lg:w-6 lg:h-6 text-secondary-text'/>
                    <span className='text-secondary-text font-mono md:text-xl lg:text-xl'>@natanmatiusso_</span>
                </a>

                  <a 
                    href="mailto:seuemail@gmail.com"
                    className='flex items-center gap-1 md:gap-2'
                >
                    <FaEnvelope className='w-4 h-4 md:w-6 md:h-6 lg:w-6 lg:h-6 text-secondary-text'/>
                    <span className='text-secondary-text font-mono md:text-xl lg:text-xl'>natanmatiusso@gmail.com</span>
                </a>
                
            </div>

            

        </footer>
    )
}

export default Footer;