import React, { useState } from 'react'
import { FortuneProvider } from './fortuneContext.jsx'
import FortuneDraw from './components/FortuneDraw.jsx'
import CardPack from './components/CardPack.jsx'
import EquipmentGacha from './components/EquipmentGacha.jsx'

export default function App() {
  const [tab, setTab] = useState('home')

  return (
    <FortuneProvider>
      <div className="app">
        <header className="header">
          <h1>종합 가챠 시뮬레이션</h1>
          <p>운세 → 카드팩 → 장비 강화까지 한 번에!</p>
        </header>

        <nav className="tabs">
          <button className={tab==='home'?'on':''} onClick={()=>setTab('home')}>홈</button>
          <button className={tab==='fortune'?'on':''} onClick={()=>setTab('fortune')}>운세 뽑기</button>
          <button className={tab==='cards'?'on':''} onClick={()=>setTab('cards')}>카드팩 뽑기</button>
          <button className={tab==='equip'?'on':''} onClick={()=>setTab('equip')}>장비 강화</button>
        </nav>

        <main className="page">
          {tab==='home' && (
            <section className="home">
              <div className="grid">
                <div className="card" onClick={()=>setTab('fortune')}>
                  <div className="icon">🧧</div>
                  <h3>운세 뽑기</h3>
                  <p>오늘의 운세와 조언</p>
                </div>
                <div className="card" onClick={()=>setTab('cards')}>
                  <div className="icon">🎴</div>
                  <h3>포켓몬 카드팩</h3>
                  <p>5~10장 오픈, 희귀 연출</p>
                </div>
                <div className="card" onClick={()=>setTab('equip')}>
                  <div className="icon">⚔️</div>
                  <h3>장비 강화</h3>
                  <p>등급 뽑기 + 강화 도전</p>
                </div>
              </div>
            </section>
          )}
          {tab==='fortune' && <FortuneDraw />}
          {tab==='cards' && <CardPack />}
          {tab==='equip' && <EquipmentGacha />}
        </main>

        <footer className="footer">
          <button onClick={()=>setTab('home')}>홈으로</button>
          <small>※ 시뮬레이션용 페이지</small>
        </footer>
      </div>
    </FortuneProvider>
  )
}
