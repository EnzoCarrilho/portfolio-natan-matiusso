import { useEffect, useState } from "react";

function Header() {
    const [hour, setHour] = useState("");

    useEffect(() => {
        const updateHour = () => {
        setHour(
            new Date().toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            })
        );
    };

    updateHour();

    const interval = setInterval(updateHour, 1000);

    return () => clearInterval(interval);
    }, []);

    return (
        <header className="bg-black flex items-center justify-between px-4 py-2 border-b border-border">
            
            <span className="text-xs text-secondary-text font-mono truncate md:text-sm">NATAN MATIUSSO - SHOWREEL</span>

            <div className="flex items-center justify-center gap-2">
                
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#C1362B] rounded-full animate-pulse md:w-3 md:h-3" />
                    <span className="text-xs font-mono text-primary-text md:text-sm">REC</span>
                </div>

                <span className="text-xs font-mono text-primary-text md:text-sm">{hour}</span>  
            </div>
          
            
        </header>
    )
}

export default Header;