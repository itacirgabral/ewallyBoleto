import { describe, expect, test } from '@jest/globals'
import totalismo from '../../totalismo/src'

describe('# Totalizador', () => {
  test('## [0, 0, 0, 0, 0, 0, 0, 2, 0, 0] deve dar 2,00 reais', () => {
    const amount = totalismo([0, 0, 0, 0, 0, 0, 0, 2, 0, 0])
    const valor = amount.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
    expect(valor).toBe('2,00')
  })
  test('## Preco da gasolina [6, 9, 9, 9] deve dar 6.999', () => {
    expect(totalismo([6, 9, 9, 9], 3)).toBe(6.999)
  })
})
