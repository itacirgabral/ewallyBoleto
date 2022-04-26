import { describe, expect, test } from '@jest/globals'
import { checkLength, checkCharacter, listy } from '../linhaDigitavel'

const demoLinhaDigitavel = '123456789012345678901234567890123456789012345678'

describe('# LINHA DIGITAVEL', () => {
  test('## Deve ser verdadeiro para algo do tamanho 47', () => {
    expect(checkLength(demoLinhaDigitavel)).toBeTruthy()
  })
  test('## Deve ser falso para algo do tamanho diferente de 47', () => {
    expect(checkLength('12345')).toBeFalsy()
  })
  test('## Deve ser verdadeiro para \'8\'', () => {
    expect(checkCharacter('8')).toBeTruthy()
  })
  test('## Deve ser falso para \',\'', () => {
    expect(checkCharacter(',')).toBeFalsy()
  })
  test('## Deve converter demoLinhaDigitavel para um array de numeros', () => {
    const value = listy(demoLinhaDigitavel) as Array<number>
    expect(Array.isArray(value)).toBeTruthy()
    expect(value[0]).toBe(1)
  })
  test('## Deve tentar converter ,./ e dar erro', async () => {
    expect(() => listy(',./')).toThrow()
  })
})
