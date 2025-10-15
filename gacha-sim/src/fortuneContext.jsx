import React, { createContext, useContext, useState } from 'react'

const FortuneCtx = createContext(null)

export function FortuneProvider({ children }) {
  const [fortune, setFortune] = useState(null) // '대길' | '중길' | '소길' | '흉' | '대흉' | null
  return (
    <FortuneCtx.Provider value={{ fortune, setFortune }}>
      {children}
    </FortuneCtx.Provider>
  )
}

export function useFortune() {
  const ctx = useContext(FortuneCtx)
  if (!ctx) throw new Error('useFortune must be used in FortuneProvider')
  return ctx
}

export function getFortuneBonus(type) {
  switch (type) {
    case '대길': return 5
    case '중길': return 3
    case '소길': return 1
    case '흉': return -3
    case '대흉': return -5
    default: return 0
  }
}
