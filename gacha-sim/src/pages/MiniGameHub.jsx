import React, { useState } from 'react'
import TypingGame from '../components/TypingGame.jsx'
import MemoryGame from "../components/MemoryGame.jsx"

export default function MiniGameHub() {
    const [game, setGame] = useState(null)

    if (game === 'typing') return <TypingGame onBack={() => setGame(null)} />
    if (game === 'memory') return <MemoryGame onBack={() => setGame(null)} />

    return (
        <section className="lobby">
            <h2>🎮 미니게임 허브</h2>
            <p>게임을 선택하세요</p>
            <div className="lobby-grid">
                <div className="lobby-card" onClick={() => setGame('typing')}>
                    ⌨️ <h3>타이핑 테스트</h3>
                </div>
                <div className="lobby-card" onClick={() => setGame('memory')}>
                    🃏 <h3>카드 뒤집기</h3>
                </div>
            </div>
        </section>
    )
}
