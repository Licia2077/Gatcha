import React from "react";

export default function Timeline({ entries }) {
    return (
        <div className="card">
            <h2>⏳ 타임라인</h2>
            {entries.length === 0 ? (
                <p className="text-gray-500 italic">아직 기록이 없습니다.</p>
            ) : (
                <div className="timeline">
                    {entries.map((e, idx) => (
                        <div key={idx} className="timeline-row">
                            <div className="timeline-date">{e.date}</div>
                            <div className="timeline-card">
                                <p className="timeline-text">{e.text}</p>
                                <span className="timeline-tags">{e.tags.join(" ")}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
