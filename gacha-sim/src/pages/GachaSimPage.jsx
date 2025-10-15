import React, { useState } from 'react'
import FortuneDraw from '../components/FortuneDraw.jsx'
import CardPack from '../components/CardPack.jsx'
import EquipmentGacha from '../components/EquipmentGacha.jsx'

export default function GachaSimPage() {
  const [tab, setTab] = useState('fortune')

  return (
    <div>
      <nav className="tabs">
        <button className={tab==='fortune'?'on':''} onClick={()=>setTab('fortune')}>운세 뽑기</button>
        <button className={tab==='cards'?'on':''} onClick={()=>setTab('cards')}>카드팩 뽑기</button>
        <button className={tab==='equip'?'on':''} onClick={()=>setTab('equip')}>장비 강화</button>
      </nav>

      <main className="page">
        {tab==='fortune' && <FortuneDraw />}
        {tab==='cards' && <CardPack />}
        {tab==='equip' && <EquipmentGacha />}
      </main>
    </div>
  )
}
