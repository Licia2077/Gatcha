import React, { useState } from 'react'
import { FortuneProvider } from './fortuneContext.jsx'
import GachaSimPage from './pages/GachaSimPage.jsx'
import EfficiencyTable from './components/EfficiencyTable.jsx'
import PackageEfficiency from './components/PackageEfficiency.jsx'

export default function App() {
  const [tab, setTab] = useState('gacha')

  return (
    <FortuneProvider>
      <div className="app">
        <header className="header">
          <h1>통합 가챠 홈페이지</h1>
          <p>시뮬레이션 ↔ 효율표 ↔ 패키지 계산기</p>
        </header>

        <nav className="tabs">
          <button className={tab==='gacha'?'on':''} onClick={()=>setTab('gacha')}>가챠 시뮬</button>
          <button className={tab==='eff'?'on':''} onClick={()=>setTab('eff')}>효율 계산표</button>
          <button className={tab==='pkg'?'on':''} onClick={()=>setTab('pkg')}>패키지 효율</button>
        </nav>

        <main className="page">
          {tab==='gacha' && <GachaSimPage />}
          {tab==='eff' && <EfficiencyTable />}
          {tab==='pkg' && <PackageEfficiency />}
        </main>
      </div>
    </FortuneProvider>
  )
}
