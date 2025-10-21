import React, { useState } from "react";
import { scenario } from "./data/scenario";
import SessionViewer from "./components/SessionViewer";
import StatusBoard from "./components/StatusBoard";
import "./components/Effects.css";

export default function App() {
    const [current, setCurrent] = useState(0);
    const [status, setStatus] = useState({ reader: 0, error: 0, collapse: 0 });

    const handleChoice = (effect) => {
        setStatus((prev) => ({
            reader: prev.reader + (effect.reader || 0),
            error: prev.error + (effect.error || 0),
            collapse: prev.collapse + (effect.collapse || 0),
        }));
        setCurrent((prev) => prev + 1);
    };

    const session = scenario.acts[current];

    // 엔딩 판정
    if (!session) {
        let ending = "불명";
        if (status.collapse >= 10) ending = "오염 엔딩";
        else if (status.error > status.reader && status.error > 8) ending = "지배 엔딩";
        else if (status.reader >= status.error) ending = "독자 엔딩";
        else ending = "구원 엔딩";

        return (
            <div className="relative min-h-screen bg-black flex items-center justify-center text-center text-white fade-in">
                <div className="overlay-crack"></div>
                <div>
                    <h1 className="text-3xl font-bold text-yellow-400 mb-4">캠페인 종료</h1>
                    <p>📖 독자 포인트: {status.reader}</p>
                    <p>⚠️ 오류 포인트: {status.error}</p>
                    <p>💥 붕괴 게이지: {status.collapse}</p>
                    <h2 className="text-2xl mt-4">최종 엔딩: {ending}</h2>
                </div>
            </div>
        );
    }

    return (
        <div className={`relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white p-8 fade-in ${status.collapse >= 7 ? "vignette" : ""}`}>
            <div className="overlay-crack"></div>
            <div className="flex flex-col gap-6 max-w-3xl mx-auto relative z-10">
                <h1 className="text-4xl font-extrabold text-yellow-400 drop-shadow-lg tracking-widest">
                    ✦ Ashen Mirage TRPG ✦
                </h1>
                <StatusBoard status={status} />
                <SessionViewer session={session} onChoose={handleChoice} />
            </div>
        </div>
    );
}
