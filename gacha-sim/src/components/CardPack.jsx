import React, { useMemo, useState } from 'react'
import { CARD_POOL, BASE_RATES } from '../data/cards.js'
import { getFortuneBonus, useFortune } from '../fortuneContext.jsx'
import { clamp, weightedPick } from '../utils.js'

function buildRateWithBonus(base, bonus) {
  const ultra = clamp(base['초희귀'] + bonus, 1, 95)
  const rare  = clamp(base['희귀'] + Math.round(bonus * 0.6), 1, 95)
  let common  = 100 - ultra - rare
  if (common < 1) { common = 1 }
  return { '일반': common, '희귀': rare, '초희귀': ultra }
}

function pickRarity(rates) {
  const table = Object.entries(rates).map(([key, pct]) => ({ key, weight: pct }))
  return weightedPick(table)
}

function drawOne(rates) {
  const rarity = pickRarity(rates)
  const pool = CARD_POOL.filter(c => c.rarity === rarity)
  return pool[Math.floor(Math.random() * pool.length)]
}

export default function CardPack() {
  const { fortune } = useFortune()
  const [count, setCount] = useState(5)
  const [results, setResults] = useState([])

  const rates = useMemo(() => {
    const bonus = getFortuneBonus(fortune)
    return buildRateWithBonus(BASE_RATES, bonus)
  }, [fortune])

  const onOpen = () => {
    setResults(Array.from({ length: count }, () => drawOne(rates)))
  }

  return (
    <section className="section">
      <h2>포켓몬 카드팩</h2>
      <div className="row" style={{marginTop:8}}>
        <label>개수:
          <select value={count} onChange={e=>setCount(Number(e.target.value))} style={{marginLeft:8}}>
            <option value={5}>5장</option>
            <option value={10}>10장</option>
          </select>
        </label>
        <button className="btn" onClick={onOpen}>오픈</button>
        <span className="badge">희귀도 비율: 일반 {rates['일반']}% / 희귀 {rates['희귀']}% / 초희귀 {rates['초희귀']}%</span>
      </div>

      <div className="list">
        {results.map((c, i) => (
          <div key={i} className="card-slot">
            <div className="rarity">{c.rarity}</div>
            <div className="name">{c.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
