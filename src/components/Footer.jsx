import { Link } from 'react-router-dom';

function Footer (){
    return(
        <footer className="flex justify-center border-t-2 border-t-secondary ">
            <div className="flex items-center justify-center">
                <div className="flex flex-col">
                    <Link
                        to="/carousel"
                        className=""
                    >
                        Home
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;