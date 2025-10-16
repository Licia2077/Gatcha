import React from 'react'

export default function EfficiencyTable() {
  const data = [
    { game: '원신', rate5: '0.6%', pity: '90연차', soft: '75연차 이후↑', guarantee: '50:50 (2번 중 1번 보장)', summary: '180연차 확정' },
    { game: '스타레일', rate5: '0.6%', pity: '90연차', soft: '75연차 이후↑', guarantee: '50:50 (2번 중 1번 보장)', summary: '180연차 확정' },
    { game: '젠존제', rate5: '0.6%', pity: '90연차', soft: '75연차 이후↑', guarantee: '50:50 (2번 중 1번 보장)', summary: '180연차 확정' },
    { game: '명조', rate5: '2%', pity: '없음 (소프트 50연차↑)', soft: '50연차 이후↑', guarantee: '픽업 70%', summary: '평균 60~70연차' },
    { game: '리버스:1999', rate5: '1.6%', pity: '80연차', soft: '60연차 이후↑', guarantee: '50:50 (2번 중 1번 보장)', summary: '160연차 확정' },
  ]

  return (
    <section className="section">
      <h2>가챠 효율 계산표</h2>
      <div className="table-wrap">
        <table className="eff-table">
          <thead>
            <tr>
              <th>게임</th><th>★5 확률</th><th>천장</th><th>반천장</th><th>보장</th><th>효율 요약</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d,i)=>(
              <tr key={i}>
                <td>{d.game}</td>
                <td>{d.rate5}</td>
                <td>{d.pity}</td>
                <td>{d.soft}</td>
                <td>{d.guarantee}</td>
                <td>{d.summary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
