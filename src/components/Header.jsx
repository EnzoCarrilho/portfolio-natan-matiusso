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
            
            <span className="text-secondary-text text-sm font-mono truncate">NATAN MATIUSSO - SHOWREEL</span>

            <div className="flex items-center justify-center gap-2">
                
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-[#C1362B] rounded-full animate-pulse" />
                    <span className="font-mono text-sm">REC</span>
                </div>

                <span className="font-mono text-sm">{hour}</span>  
            </div>
          
            
        </header>
    )
}

export default Header;