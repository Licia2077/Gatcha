import React from "react";

export default function StatusBoard({ status }) {
    return (
        <div className="p-6 bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-xl border border-yellow-600">
            <h2 className="text-xl font-bold mb-4 text-yellow-400 font-serif tracking-wide">
                ✦ 상태 서판 ✦
            </h2>
            <ul className="space-y-3 font-serif">
                <li>📖 독자 포인트: <span className="text-blue-300">{status.reader}</span></li>
                <li>⚠️ 오류 포인트: <span className="text-red-400">{status.error}</span></li>
                <li>
                    💥 붕괴 게이지: {status.collapse}/10
                    <div className="w-full h-3 bg-gray-700 rounded-full mt-1 border border-yellow-700">
                        <div
                            className="h-3 rounded-full bg-gradient-to-r from-red-600 via-purple-700 to-black transition-all"
                            style={{ width: `${(status.collapse / 10) * 100}%` }}
                        />
                    </div>
                </li>
            </ul>
        </div>
    );
}
