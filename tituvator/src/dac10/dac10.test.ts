import { describe, expect, test } from '@jest/globals'
import dac10 from '../dac10'

describe('# Digito Verificador Modulo 10', () => {
  test('## DAC 10', () => {
    expect(dac10([2, 0, 0, 0, 0, 0, 0, 2, 6, 3, 8])).toBe(1)
  })
  test('## DAC 10', () => {
    expect(dac10([8, 3, 6, 2, 0, 0, 0, 0, 0, 0, 2])).toBe(1)
  })
  test('## DAC 10', () => {
    expect(dac10([2, 9, 2, 6, 0, 0, 4, 8, 1, 0, 0])).toBe(9)
  })
  test('## DAC 10', () => {
    expect(dac10([1, 4, 3, 5, 3, 0, 9, 3, 0, 0, 1])).toBe(3)
  })
  test('## DAC 10', () => {
    expect(dac10([0, 0, 1, 9, 0, 4, 2, 1, 0, 7, 6])).toBe(0)
  })
})
