import { describe, expect, test } from '@jest/globals'
import { fatorVencimento2days, makeExpirationDate, originDate } from '../tetrapak'

describe('# Fator vencimento', () => {
  test('## Marco zero deve ser 7 de outubro de 1997', () => {
    expect(originDate.toDateString()).toBe('Tue Oct 07 1997')
  })
  test('## Fator de vencimento [1, 0, 0, 1] deve ser 1001 dias', () => {
    expect(fatorVencimento2days([1, 0, 0, 1])).toBe(1001)
  })
  test('## Fator vencimento 1001 deve acontecer em 04 de julho de 2000', () => {
    const goodFor = new Date('2000/jul/04')
    expect(makeExpirationDate(1001).toLocaleDateString()).toBe(goodFor.toLocaleDateString())
  })
})
