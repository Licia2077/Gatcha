import React, { useMemo, useState } from 'react'
import { ARMORS, ENHANCE_TABLE, GRADE_BASE_RATES, WEAPONS } from '../data/items.js'
import { getFortuneBonus, useFortune } from '../fortuneContext.jsx'
import { clamp, weightedPick } from '../utils.js'

function buildGradeRates(base, bonus) {
  const sss = clamp(base['SSS'] + Math.round(bonus * 0.8), 0, 30)
  const ss  = clamp(base['SS']  + Math.round(bonus * 0.7), 0, 40)
  const s   = clamp(base['S']   + Math.round(bonus * 0.6), 0, 50)
  let rest = 100 - (sss + ss + s)
  const b = Math.min(base['B'], Math.max(0, Math.round(rest * 0.35)))
  const a = Math.min(base['A'], Math.max(0, Math.round(rest * 0.25)))
  const c = Math.max(0, 100 - (sss + ss + s + a + b))
  return { 'C': c, 'B': b, 'A': a, 'S': s, 'SS': ss, 'SSS': sss }
}

function pickGrade(rates) {
  const table = Object.entries(rates).map(([key, pct]) => ({ key, weight: pct }))
  return weightedPick(table)
}

export default function EquipmentGacha() {
  const { fortune } = useFortune()
  const [type, setType] = useState('무기')
  const [item, setItem] = useState(null)
  const [log, setLog] = useState([])

  const gradeRates = useMemo(() => {
    const bonus = getFortuneBonus(fortune)
    return buildGradeRates(GRADE_BASE_RATES, bonus)
  }, [fortune])

  const onDrawItem = () => {
    const pool = type === '무기' ? WEAPONS : ARMORS
    const name = pool[Math.floor(Math.random()*pool.length)]
    const grade = pickGrade(gradeRates)
    setItem({ name, grade, level: 0 })
    setLog([`획득: [${grade}] ${name}`])
  }

  const onEnhance = () => {
    if (!item) return
    if (item.level >= 10) return

    const base = ENHANCE_TABLE[item.level] ?? 10
    const bonus = getFortuneBonus(fortune)
    const chance = clamp(base + bonus, 1, 100)
    const roll = Math.random()*100
    const success = roll < chance

    if (success) {
      const next = { ...item, level: item.level + 1 }
      setItem(next)
      setLog(l => [`강화 성공 (+${next.level}) [확률 ${chance}%]`, ...l])
    } else {
      const breaked = Math.random() < 0.05
      if (breaked) {
        setLog(l => [`강화 실패(파손) [확률 ${chance}%] → 장비 분해됨`, ...l])
        setItem(null)
      } else {
        const next = { ...item, level: Math.max(0, item.level - 1) }
        setItem(next)
        setLog(l => [`강화 실패 (-1) [확률 ${chance}%]`, ...l])
      }
    }
  }

  return (
    <section className="section">
      <h2>장비 강화</h2>
      <div className="row" style={{marginTop:8}}>
        <label>유형:
          <select value={type} onChange={e=>setType(e.target.value)} style={{marginLeft:8}}>
            <option>무기</option>
            <option>방어구</option>
          </select>
        </label>
        <button className="btn" onClick={onDrawItem}>장비 뽑기</button>
        <span className="badge">
          등급 비율: C {gradeRates['C']}% / B {gradeRates['B']}% / A {gradeRates['A']}% / S {gradeRates['S']}% / SS {gradeRates['SS']}% / SSS {gradeRates['SSS']}%
        </span>
      </div>

      <div className="result">
        {item ? (
          <>
            <div><strong>장비:</strong> [{item.grade}] {item.name} (강화 +{item.level})</div>
            <div className="row" style={{marginTop:8}}>
              <button className="btn" onClick={onEnhance} disabled={item.level>=10}>강화</button>
              <button className="btn ghost" onClick={()=>setItem(null)}>버리기</button>
              <span className="badge">운세 보정 적용됨</span>
            </div>
          </>
        ) : (
          <>장비가 없습니다. 먼저 뽑으세요.</>
        )}
      </div>

      {log.length>0 && (
        <div style={{marginTop:10}}>
          <strong>로그</strong>
          <ul>
            {log.map((t,i)=>(<li key={i}>{t}</li>))}
          </ul>
        </div>
      )}
    </section>
  )
}
