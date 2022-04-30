import { describe, expect, test } from '@jest/globals'
import dac11, { fator2to9 } from '../../dac11/src'

describe('# Digito Verificador Modulo 11', () => {
  test('## Fator 2 ao 9', () => {
    expect(fator2to9(0)).toBe(2)
    expect(fator2to9(1)).toBe(3)
    expect(fator2to9(7)).toBe(9)
    expect(fator2to9(8)).toBe(2)
    expect(fator2to9(9)).toBe(3)
    expect(fator2to9(15)).toBe(9)
    expect(fator2to9(16)).toBe(2)
    expect(fator2to9(17)).toBe(3)
    expect(fator2to9(18)).toBe(4)
  })
  test('## DAC 11', () => {
    const barCode = [...'0019373700000001000500940144816060680935031'].map(Number)
    expect(dac11(barCode)).toBe(3)
  })
})
