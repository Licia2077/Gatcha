import React, { useState } from 'react'
import { FortuneProvider } from './fortuneContext.jsx'
import GachaSimPage from './pages/GachaSimPage.jsx'
import EfficiencyTable from './components/EfficiencyTable.jsx'
import PackageEfficiency from './components/PackageEfficiency.jsx'

export default function App() {
  const [tab, setTab] = useState('lobby') // 시작은 로비 화면

  return (
    <FortuneProvider>
      <div className="app">
        <header className="header">
          <h1>가챠 시뮬레이터</h1>
        </header>

        {tab === 'lobby' ? (
          <section className="lobby">
            <h2>어서오세요!</h2>
            <p>오늘은 무엇을 하시겠습니까?</p>
            <div className="lobby-grid">
              <div className="lobby-card" onClick={() => setTab('gacha')}>
                🎲 <h3>가챠 시뮬</h3>
              </div>
              <div className="lobby-card" onClick={() => setTab('eff')}>
                📊 <h3>효율표</h3>
              </div>
              <div className="lobby-card" onClick={() => setTab('pkg')}>
                💎 <h3>패키지 효율</h3>
              </div>
            </div>
          </section>
        ) : (
          <main className="page">
            {tab === 'gacha' && <GachaSimPage />}
            {tab === 'eff' && <EfficiencyTable />}
            {tab === 'pkg' && <PackageEfficiency />}
          </main>
        )}

        <footer className="footer">
          {tab !== 'lobby' && <button onClick={() => setTab('lobby')}>로비로</button>}
          <small>※ 시뮬레이션용 페이지</small>
        </footer>
      </div>
    </FortuneProvider>
  )
}
