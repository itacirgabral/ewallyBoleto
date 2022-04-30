import { describe, expect, test } from '@jest/globals'
import normalizeDac11 from '../normalizeDac11'

describe('# Normalizador do digito verificador', () => {
  test('## Modulo 11 para boletos', () => {
    expect(normalizeDac11(10)).toBe(0)
    expect(normalizeDac11(11)).toBe(0)
    expect(normalizeDac11(1)).toBe(1)
    expect(normalizeDac11(5)).toBe(5)
    expect(normalizeDac11(8)).toBe(8)
  })
})
