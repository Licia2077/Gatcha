import React, { useState } from "react"
import { FortuneProvider } from "./fortuneContext.jsx"
import GachaSimPage from "./pages/GachaSimPage.jsx"
import EfficiencyTable from "./components/EfficiencyTable.jsx"
import PackageEfficiency from "./components/PackageEfficiency.jsx"
import MiniGameHub from "./pages/MiniGameHub.jsx" // ✅ 미니게임 허브 임포트

export default function App() {
  const [tab, setTab] = useState("lobby") // 시작은 로비 화면

  return (
    <FortuneProvider>
      <div className="app">
        <header className="header">
          <h1>게임 포털</h1>
        </header>

        {tab === "lobby" ? (
          <section className="lobby">
            <h2>어서오세요!</h2>
            <p>오늘은 무엇을 하시겠습니까?</p>
            <div className="lobby-grid">
              {/* 내부 기능들 */}
              <div className="lobby-card" onClick={() => setTab("gacha")}>
                🎲 <h3>가챠 시뮬</h3>
              </div>
              <div className="lobby-card" onClick={() => setTab("eff")}>
                📊 <h3>효율표</h3>
              </div>
              <div className="lobby-card" onClick={() => setTab("pkg")}>
                💎 <h3>패키지 효율</h3>
              </div>
              <div className="lobby-card" onClick={() => setTab("mini")}>
                🎮 <h3>미니게임 허브</h3>
              </div>

              {/* 외부 링크 */}
              <a
                href="https://hsr.hoyoverse.com/ko-kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="lobby-card link-card"
              >
                🚀 <h3>스타레일 공식</h3>
              </a>
              <a
                href="https://genshin.hoyoverse.com/ko/"
                target="_blank"
                rel="noopener noreferrer"
                className="lobby-card link-card"
              >
                ✨ <h3>원신 공식</h3>
              </a>
            </div>
          </section>
        ) : (
          <main className="page">
            {tab === "gacha" && <GachaSimPage />}
            {tab === "eff" && <EfficiencyTable />}
            {tab === "pkg" && <PackageEfficiency />}
            {tab === "mini" && <MiniGameHub />}
          </main>
        )}

        <footer className="footer">
          {tab !== "lobby" && (
            <button onClick={() => setTab("lobby")}>로비로</button>
          )}
          <small>※ 시뮬레이션용 페이지</small>
        </footer>
      </div>
    </FortuneProvider>
  )
}
