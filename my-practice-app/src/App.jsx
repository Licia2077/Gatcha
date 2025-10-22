import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Counter from "./Counter.jsx";
import Clock from "./Clock.jsx";
import Board from "./Board.jsx";
import Dashboard from "./Dashboard.jsx";

function App() {
    const [dark, setDark] = useState(false);

    // 저장된 테마 불러오기
    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved === "dark") setDark(true);
    }, []);

    // 모드 저장
    useEffect(() => {
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);

    return (
        <div className={dark ? "app dark" : "app"}>
            <div className="topbar">
                <h1>연습용 앱</h1>
                <div>
                    <button onClick={() => setDark(!dark)}>
                        {dark ? "☀ 라이트모드" : "🌙 다크모드"}
                    </button>
                    <Dashboard />
                </div>
            </div>

            <div className="section">
                <h2>🕒 시계 & 타이머</h2>
                <Clock />
            </div>
            <div className="section">
                <h2>🔢 카운터</h2>
                <Counter />
            </div>
            <div className="section">
                <h2>📝 게시판</h2>
                <Board />
            </div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
