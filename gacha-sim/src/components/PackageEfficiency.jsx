import React, { useState } from 'react'
import { PACKAGES } from '../data/packages.js'

export default function PackageEfficiency() {
  const [budget, setBudget] = useState(10000) // 기본 1만원

  const calcEfficiency = (pkg) => {
    const rate = pkg.currency / pkg.price
    return rate.toFixed(2) + " / 1원"
  }

  const calcDraws = (pkg) => {
    const totalCurrency = Math.floor((budget / pkg.price) * pkg.currency)
    return Math.floor(totalCurrency / 160) + "연차"  // ★ 원석 160 = 1연차 기준
  }

  return (
    <section className="section">
      <h2>패키지 효율 계산</h2>
      <div style={{margin:"10px 0"}}>
        <label>내 예산(원): </label>
        <input type="number" value={budget} onChange={e=>setBudget(Number(e.target.value))} />
      </div>

      {Object.entries(PACKAGES).map(([game, list]) => (
        <div key={game} style={{marginBottom:'20px'}}>
          <h3>{game.toUpperCase()}</h3>
          <table className="eff-table">
            <thead>
              <tr>
                <th>패키지</th><th>가격(₩)</th><th>보석/쥬얼</th><th>효율</th><th>예산시 획득</th><th>비고</th>
              </tr>
            </thead>
            <tbody>
              {list.map((pkg,i)=>(
                <tr key={i}>
                  <td>{pkg.name}</td>
                  <td>{pkg.price.toLocaleString()}원</td>
                  <td>{pkg.currency}</td>
                  <td>{calcEfficiency(pkg)}</td>
                  <td>{calcDraws(pkg)}</td>
                  <td>{pkg.note ?? "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </section>
  )
}
