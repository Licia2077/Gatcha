import React, { useEffect, useState } from "react";

export default function SessionViewer({ session, onChoose, isEnding = false }) {
    const [displayedText, setDisplayedText] = useState("");
    const [charIndex, setCharIndex] = useState(0);

    // 세션이 바뀔 때 초기화
    useEffect(() => {
        setDisplayedText("");
        setCharIndex(0);
    }, [session]);

    // 내레이션 전체를 하나의 문자열로 합침
    const fullText = session?.narration?.join("\n") || "";

    // 속도 분기: 엔딩이면 120ms, 아니면 70ms
    const typingSpeed = isEnding ? 120 : 70;

    // 타자기 애니메이션
    useEffect(() => {
        if (!fullText) return;
        if (charIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + fullText[charIndex]);
                setCharIndex((i) => i + 1);
            }, typingSpeed);
            return () => clearTimeout(timeout);
        }
    }, [charIndex, fullText, typingSpeed]);

    return (
        <div
            className={`p-8 bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-2xl 
                  border ${isEnding ? "border-red-600" : "border-yellow-700"} fade-in`}
        >
            <h2
                className={`text-2xl font-bold mb-6 font-serif tracking-widest 
                   ${isEnding ? "text-red-400" : "text-yellow-400"}`}
            >
                {session.name}
            </h2>

            {/* 타자기 효과 */}
            <div className="text-gray-200 font-serif leading-relaxed whitespace-pre-line min-h-[200px]">
                {displayedText}
                {charIndex < fullText.length && (
                    <span className={`${isEnding ? "text-red-500" : "text-yellow-500"} animate-pulse`}>
                        ▮
                    </span>
                )}
            </div>

            {/* 선택지는 엔딩이 아닐 때만 표시 */}
            {!isEnding && charIndex === fullText.length && (
                <div className="mt-8 space-y-4">
                    {session.options.map((opt, idx) => (
                        <button
                            key={idx}
                            onClick={() => onChoose(opt.effect)}
                            className="block w-full py-3 px-4 rounded-lg gothic-btn
                         bg-gradient-to-b from-gray-900 to-gray-800
                         border-2 border-yellow-600 text-yellow-300 
                         font-serif tracking-wide
                         hover:bg-gradient-to-b hover:from-yellow-800 hover:to-yellow-900
                         hover:text-white hover:shadow-[0_0_15px_gold]
                         transition-all duration-300"
                        >
                            {opt.text}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}