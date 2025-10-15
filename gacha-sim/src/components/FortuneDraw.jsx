import React, { useMemo, useState } from 'react'
import { useFortune } from '../fortuneContext.jsx'
import { weightedPick } from '../utils.js'

const TABLE = [
  { key: '대길', weight: 8 },
  { key: '중길', weight: 16 },
  { key: '소길', weight: 36 },
  { key: '흉',   weight: 24 },
  { key: '대흉', weight: 16 },
]

const ADVICE = {
  '대길': '새로운 시도를 해보세요. 당첨 확률 보너스가 붙습니다.',
  '중길': '무리하지 않는 도전이 좋습니다.',
  '소길': '루틴을 지키며 천천히.',
  '흉':   '큰 결정은 미루고 가벼운 즐거움을.',
  '대흉': '휴식이 필요합니다. 오늘은 구경만 해도 좋아요.',
}

export default function FortuneDraw() {
  const { fortune, setFortune } = useFortune()
  const [spinning, setSpinning] = useState(false)

  const onDraw = () => {
    setSpinning(true)
    setTimeout(() => {
      const f = weightedPick(TABLE)
      setFortune(f)
      setSpinning(false)
    }, 800)
  }

  const advice = useMemo(() => fortune ? ADVICE[fortune] : '아직 뽑지 않았습니다.', [fortune])

  return (
    <section className="section">
      <h2>운세 뽑기</h2>
      <div className="row" style={{marginTop:8}}>
        <button className="btn" onClick={onDraw} disabled={spinning}>
          {spinning ? '점괘 확인 중...' : '운세 뽑기'}
        </button>
        {fortune && <span className="badge">오늘의 운세: {fortune}</span>}
      </div>

      <div className="result">
        <strong>조언:</strong> {advice}
      </div>
      <small>운세는 카드/강화 확률에 영향을 줍니다.</small>
    </section>
  )
}
