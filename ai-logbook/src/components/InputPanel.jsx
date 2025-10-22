import React, { useState } from "react";

export default function InputPanel({ onAdd }) {
    const [text, setText] = useState("");

    const handleAdd = () => {
        if (!text.trim()) return;
        const entry = {
            date: new Date().toISOString().slice(0, 10),
            text,
            tags: ["#메모"],
        };
        onAdd(entry);
        setText("");
    };

    return (
        <div className="p-6 rounded-2xl bg-white/70 backdrop-blur shadow-xl border border-white/50">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">✍️ 오늘 기록하기</h2>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="오늘 메모를 남겨보세요..."
                className="w-full p-4 border rounded-xl bg-white/60 focus:ring-4 focus:ring-pink-300 focus:outline-none resize-none transition"
                rows="4"
            />
            <button
                onClick={handleAdd}
                className="mt-4 w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-200"
            >
                🌸 기록 추가
            </button>
        </div>
    );
}
