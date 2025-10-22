import React, { useState, useEffect } from "react";

export default function Clock() {
    const [time, setTime] = useState(new Date());
    const [seconds, setSeconds] = useState(30);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        let interval;
        if (running && seconds > 0) {
            interval = setInterval(() => setSeconds((s) => s - 1), 1000);
        }
        return () => clearInterval(interval);
    }, [running, seconds]);

    const presetTimes = [
        { label: "30초", value: 30 },
        { label: "1분", value: 60 },
        { label: "10분", value: 600 },
        { label: "30분", value: 1800 },
        { label: "1시간", value: 3600 },
    ];

    return (
        <div>
            <p>현재 시각: {time.toLocaleTimeString()}</p>
            <p>타이머: {seconds}초</p>

            <div>
                {presetTimes.map((t, idx) => (
                    <button key={idx} onClick={() => setSeconds(t.value)}>
                        {t.label}
                    </button>
                ))}
            </div>

            <div>
                <button className="start" onClick={() => setRunning(true)}>시작</button>
                <button className="danger" onClick={() => setRunning(false)}>멈춤</button>
                <button className="danger" onClick={() => setSeconds(30)}>리셋</button>
            </div>
        </div>
    );
}
