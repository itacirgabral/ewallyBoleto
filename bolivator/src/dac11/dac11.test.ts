import { describe, expect, test } from '@jest/globals'
import dac11, { tiraQuinto, fator2to9 } from '../dac11'

describe('# Digito Verificador Modulo 11', () => {
  test('## Remove o Digito Validador', () => {
    const barCodeDVless = tiraQuinto([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

    expect(barCodeDVless).toEqual([1, 2, 3, 4, 6, 7, 8, 9, 0])
  })
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
    const barCode = [...'00193373700000001000500940144816060680935031'].map(Number)
    expect(dac11(barCode)).toBe(barCode[4])
  })
})
