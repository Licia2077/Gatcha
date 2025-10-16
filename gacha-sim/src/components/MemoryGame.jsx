import React, { useState, useEffect } from 'react'

const cards = ['🍎', '🍌', '🍇', '🍉', '🍒', '🍑']
const shuffled = [...cards, ...cards].sort(() => Math.random() - 0.5)

export default function MemoryGame({ onBack }) {
    const [flipped, setFlipped] = useState([])
    const [matched, setMatched] = useState([])

    const handleClick = (index) => {
        if (flipped.length === 2 || flipped.includes(index)) return
        setFlipped([...flipped, index])
    }

    useEffect(() => {
        if (flipped.length === 2) {
            const [a, b] = flipped
            if (shuffled[a] === shuffled[b]) {
                setMatched([...matched, shuffled[a]])
            }
            setTimeout(() => setFlipped([]), 1000)
        }
    }, [flipped])

    return (
        <section className="section">
            <h2>🃏 카드 뒤집기</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 80px)',
                gap: '10px',
                justifyContent: 'center'
            }}>
                {shuffled.map((card, idx) => {
                    const isFlipped = flipped.includes(idx) || matched.includes(card)
                    return (
                        <div
                            key={idx}
                            onClick={() => handleClick(idx)}
                            style={{
                                width: '80px',
                                height: '80px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '2px solid #4c5bff',
                                borderRadius: '8px',
                                background: isFlipped ? '#fff' : '#ccc',
                                fontSize: '2rem',
                                cursor: 'pointer'
                            }}
                        >
                            {isFlipped ? card : "❓"}
                        </div>
                    )
                })}
            </div>
            <div style={{ marginTop: 10 }}>
                <button onClick={onBack}>뒤로</button>
            </div>
        </section>
    )
}
