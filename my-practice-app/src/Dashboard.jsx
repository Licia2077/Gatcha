import React, { useState } from "react";

export default function Dashboard() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button className="menu-btn" onClick={() => setOpen(true)}>☰</button>
            {open && (
                <div className="overlay">
                    <div className="popup">
                        <button className="close-btn" onClick={() => setOpen(false)}>✖</button>
                        <h2>📊 대시보드</h2>
                        <p>여기에 랜덤 포켓몬, 날씨, 명언 등을 표시할 수 있어요.</p>
                    </div>
                </div>
            )}
        </>
    );
}
