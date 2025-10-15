import React, { useState } from 'react'
import { CARD_POOL } from '../data/cards.js'

export default function CardPack() {
  const [count, setCount] = useState(5)
  const [results, setResults] = useState([])

  const openPack = () => {
    const newResults = []
    for (let i = 0; i < count; i++) {
      const r = Math.random() * 100
      if (r < 65) newResults.push(CARD_POOL.find(c => c.rarity === "일반"))
      else if (r < 92) newResults.push(CARD_POOL.find(c => c.rarity === "희귀"))
      else newResults.push(CARD_POOL.find(c => c.rarity === "초희귀"))
    }
    setResults(newResults)
  }

  return (
    <section className="section">
      <h2>포켓몬 카드팩</h2>
      <div style={{ marginBottom: "10px" }}>
        <label>개수: </label>
        <select value={count} onChange={e => setCount(Number(e.target.value))}>
          <option value={5}>5장</option>
          <option value={10}>10장</option>
        </select>
        <button className="primary" onClick={openPack}>오픈</button>
        <span style={{ marginLeft: "10px", color: "#666", fontSize: "0.9rem" }}>
          희귀도 비율: 일반 65% / 희귀 27% / 초희귀 8%
        </span>
      </div>

      <div className="card-grid">
        {results.map((card, i) => (
          <div key={i} className={`poke-card ${card.rarity}`}>
            <img src={card.img} alt={card.name} className="poke-img" />
            <h4>{card.name}</h4>
            <p>{card.rarity}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
