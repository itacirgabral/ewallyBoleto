import { describe, expect, test } from '@jest/globals'
import dac10, { fator21, charRedutor, respelho10 } from '../dac10'

describe('# Digito Verificador Modulo 10', () => {
  test('## Fator 2 ou 1', () => {
    const arrayIdxs = [0, 1, 2, 3]

    expect(fator21(arrayIdxs[0])).toBe(2)
    expect(fator21(arrayIdxs[1])).toBe(1)
    expect(fator21(arrayIdxs[2])).toBe(2)
    expect(fator21(arrayIdxs[3])).toBe(1)
  })
  test('## Redutor a um algarismo somando cada digito', () => {
    expect(charRedutor(0)).toBe(0)
    expect(charRedutor(32)).toBe(5)
    expect(charRedutor(99)).toBe(9)
  })
  test('## O que falta pro vaium', () => {
    expect(respelho10(25)).toBe(5)
    expect(respelho10(31)).toBe(9)
    expect(respelho10(36)).toBe(4)
  })
  test('## DAC 10', () => {
    expect(dac10([0, 0, 1, 9, 0, 5, 0, 0, 9])).toBe(5)
    expect(dac10([4, 0, 1, 4, 4, 8, 1, 6, 0, 6])).toBe(9)
    expect(dac10([0, 6, 8, 0, 9, 3, 5, 0, 3, 1])).toBe(4)
  })
})
