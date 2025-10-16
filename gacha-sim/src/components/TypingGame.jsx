import React, { useState, useEffect } from 'react'

// 테스트 문장 (원하는 만큼 바꿀 수 있음)
const sampleText = "이 문장을 최대한 빠르고 정확하게 입력해보세요!"

export default function TypingGame({ onBack }) {
    const [input, setInput] = useState("")       // 사용자가 입력한 내용
    const [startTime, setStartTime] = useState(null) // 시작 시간
    const [endTime, setEndTime] = useState(null)     // 종료 시간

    // 입력 변화 감지
    useEffect(() => {
        // 첫 글자 입력 시 시작 시간 기록
        if (input.length === 1 && !startTime) {
            setStartTime(Date.now())
        }

        // 문장을 다 입력했을 때 종료 시간 기록
        if (input === sampleText) {
            setEndTime(Date.now())
        }
    }, [input])

    // 결과 계산
    let result = null
    if (endTime && startTime) {
        const sec = (endTime - startTime) / 1000     // 소요 시간(초)
        const wpm = Math.round((sampleText.length / 5) / (sec / 60)) // 분당 타수
        result = `걸린 시간: ${sec.toFixed(2)}초, 타자 속도: ${wpm} WPM`
    }

    return (
        <section className="section">
            <h2>⌨️ 타이핑 속도 테스트</h2>
            <p style={{ marginBottom: "12px", fontWeight: "600" }}>{sampleText}</p>

            <textarea
                rows={3}
                value={input}
                onChange={e => setInput(e.target.value)}
                disabled={!!endTime} // 게임 끝나면 입력 불가
                style={{ width: "100%", padding: "10px", fontSize: "1rem" }}
            />

            <div style={{ marginTop: "12px" }}>
                {result && <p style={{ fontWeight: "bold", color: "#4c5bff" }}>{result}</p>}
                <button onClick={onBack}>뒤로</button>
            </div>
        </section>
    )
}
