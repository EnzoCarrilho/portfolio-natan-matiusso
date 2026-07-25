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
        <header className="bg-[--color-void] flex items-center justify-between px-8 py-2 border-b border-border">
            <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[#C1362B] rounded-full animate-pulse" />
                <span className="text-secondary-text">REC</span>
            </div>
            <span className="text-secondary-text">{hour}</span>
            
        </header>
    )
}

export default Header;