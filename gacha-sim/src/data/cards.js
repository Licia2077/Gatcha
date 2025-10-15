// 간단 예시 카드풀 (이름만 사용)
// rarity: '일반' | '희귀' | '초희귀'
export const CARD_POOL = [
  { name: '피카', rarity: '일반' },
  { name: '파이리', rarity: '일반' },
  { name: '꼬부기', rarity: '일반' },
  { name: '이상해씨', rarity: '일반' },
  { name: '고우스트', rarity: '희귀' },
  { name: '샤미드', rarity: '희귀' },
  { name: '마기라스', rarity: '희귀' },
  { name: '루카리오', rarity: '초희귀' },
  { name: '팬텀', rarity: '초희귀' },
  { name: '뮤츠', rarity: '초희귀' },
]

export const BASE_RATES = {
  // 기본 확률(%) 합=100
  '일반': 70,
  '희귀': 25,
  '초희귀': 5,
}
