import { describe, expect, test } from '@jest/globals'
import dac11 from '../dac11'

describe('# Digito Verificador Modulo 11', () => {
  test('## DAC 11', () => {
    const sequencia = [...'01230067896'].map(Number)
    expect(dac11(sequencia)).toBe(0)
  })
  test('## DAC 11', () => {
    const sequencia = [...'82200000215048200974123220154098290108605940'].map(Number)
    expect(dac11([...sequencia.slice(0, 3), ...sequencia.slice(4)])).toBe(sequencia[3])
  })
})
