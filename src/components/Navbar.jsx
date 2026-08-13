import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Sobre" },
    { href: "/works", label: "Trabalhos" },
    { href: "/contact", label: "Contato" }
]

function Navbar() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    return (
        <nav className="relative flex flex-col items-center py-5 gap-2">

            <div className="flex items-center justify-center gap-2">
                <Link
                    to="/carousel"
                    className="glass-strong opacity-70 lg:opacity-100 py-3 px-6 rounded-4xl text-sm text-primary-text transition-opacity duration-300"
                >
                    Natan Matiusso
                </Link>

                <div
                    className="group glass-strong opacity-70 lg:opacity-100 p-2 rounded-full transition-all duration-300 lg:cursor-default"
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                >
                    {/* Ícone do menu */}
                    <div className="lg:group-hover:hidden">
                        {isMobileMenuOpen ? <X size={24} color='white' /> : <Menu size={24} color='white' />}
                    </div>

                    {/* Menu desktop - Expande no hover (só lg+) */}
                    <div className="hidden lg:group-hover:flex items-center gap-2 animate-fade-in">
                            {navLinks.map((link) => (
                                <div key={link.href} className="p-0">
                                    <Link
                                        to={link.href}
                                        className="px-6 py-3 text-sm text-primary-text hover:text-black rounded-full hover:bg-secondary"
                                    >
                                        {link.label}
                                    </Link>
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            {/* Menu mobile/tablet - abre por clique, vertical */}
            <div
                className={`${isMobileMenuOpen ? "flex" : "hidden"} lg:hidden absolute top-full left-0 z-50 glass-strong flex-col items-center gap-4 w-full py-6 rounded-2xl animate-fade-in`}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-sm text-primary-text"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    )
}

export default Navbar;