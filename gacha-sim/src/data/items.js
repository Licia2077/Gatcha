export const WEAPONS = ['장검', '단검', '활', '도끼', '지팡이']
export const ARMORS  = ['갑옷', '경갑', '망토', '방패', '투구']

export const GRADES = ['C', 'B', 'A', 'S', 'SS', 'SSS']

export const GRADE_BASE_RATES = {
  // 합=100
  'C': 35,
  'B': 30,
  'A': 18,
  'S': 10,
  'SS': 5,
  'SSS': 2,
}

// 강화 성공률: +N 단계에서의 기본 성공률(%)
export const ENHANCE_TABLE = {
  0: 90, 1: 85, 2: 80, 3: 75, 4: 70,
  5: 60, 6: 50, 7: 40, 8: 30, 9: 20,
}
