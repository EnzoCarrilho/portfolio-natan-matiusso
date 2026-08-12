import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navLinks = [
    { href: "#", label: "Home" },
    { href: "#about", label: "Sobre" },
    { href: "#works", label: "Trabalhos" },
    { href: "#contact", label: "Contato" }
]

function Navbar() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    return (
        <nav className="relative flex flex-col items-center py-5 gap-2">

            <div className="flex items-center justify-center gap-2">
                <a
                    href="#carousel"
                    className="glass-strong py-3 px-6 rounded-4xl text-sm"
                >
                    Natan Matiusso
                </a>

                <div
                    className="group glass-strong p-2 rounded-full transition-all duration-300 md:cursor-default"
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                >
                    {/* Ícone do menu */}
                    <div className="md:group-hover:hidden">
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </div>

                    {/* Menu desktop - Expande*/}
                    <div className="hidden md:group-hover:flex items-center gap-2 animate-fade-in">
                            {navLinks.map((link, index) => (
                                <div className='p-0'>
                                     <a 
                                        href={link.href} 
                                        key={index} 
                                        className="px-6 py-3 text-sm text-foreground hover:text-black rounded-full hover:bg-secondary-light"
                                        >
                                            {link.label}
                                        </a>
                                </div>
                               
                            ))}
                    </div>
                </div>
            </div>

            {/* Menu mobile */}
            <div
                className={`${isMobileMenuOpen ? "flex" : "hidden"} md:hidden absolute top-full left-0 z-50 glass-strong flex-col items-center gap-4 w-full py-6 rounded-2xl animate-fade-in`}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-sm"
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </nav>
    )
}

export default Navbar;