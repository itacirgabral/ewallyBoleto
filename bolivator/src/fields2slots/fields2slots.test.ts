import { describe, expect, test } from '@jest/globals'
import fields2slots from '../fields2slots'

// AAABC.CCCCX DDDDD.DDDDDY EEEEE.EEEEEZ K UUUUVVVVVVVVVV
const rawFields = ['A', 'A', 'A', 'B', 'C', 'C', 'C', 'C', 'C', 'X', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'Y', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'Z', 'K', 'U', 'U', 'U', 'U', 'V', 'V', 'V', 'V', 'V', 'V', 'V', 'V', 'V', 'V']

describe('# CONVERSAO DE CAMPOS PARA ATRIBUTOS PRIVADOS', () => {
  test('## Número Código da IF Destinatária no SILOC', () => {
    const { slotsA } = fields2slots(rawFields)
    expect(slotsA).toEqual(['A', 'A', 'A'])
  })
  test('## Código da moeda', () => {
    const { slotB } = fields2slots(rawFields)
    expect(slotB).toEqual('B')
  })
  test('##  Posições 20 a 24 do código de barras', () => {
    const { slotsC } = fields2slots(rawFields)
    expect(slotsC).toEqual(['C', 'C', 'C', 'C', 'C'])
  })
  test('## Digito Verificador do Campo 1 Módulo 10', () => {
    const { slotX } = fields2slots(rawFields)
    expect(slotX).toEqual('X')
  })
  test('## Posições 25 a 34 do código de barras', () => {
    const { slotsD } = fields2slots(rawFields)
    expect(slotsD).toEqual(['D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D'])
  })
  test('## Digito Verificador do Campo 2 Módulo 10', () => {
    const { slotY } = fields2slots(rawFields)
    expect(slotY).toEqual('Y')
  })
  test('## Posições 35 a 44 do código de barras', () => {
    const { slotsE } = fields2slots(rawFields)
    expect(slotsE).toEqual(['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'])
  })
  test('## Digito Verificador do Campo 3 Módulo 10', () => {
    const { slotZ } = fields2slots(rawFields)
    expect(slotZ).toEqual('Z')
  })
  test('## Digito Verificador do código de barras Módulo 11', () => {
    const { slotK } = fields2slots(rawFields)
    expect(slotK).toEqual('K')
  })
  test('## Fator de Vencimento', () => {
    const { slotsU } = fields2slots(rawFields)
    expect(slotsU).toEqual(['U', 'U', 'U', 'U'])
  })
  test('## Valor do boleto de pagamento', () => {
    const { slotsV } = fields2slots(rawFields)
    expect(slotsV).toEqual(['V', 'V', 'V', 'V', 'V', 'V', 'V', 'V', 'V', 'V'])
  })
  test('## Codigo de barras guiado', () => {
    const correctBarCode = [...'AAABKUUUUVVVVVVVVVVCCCCCDDDDDDDDDDEEEEEEEEEE']
    const { barCode } = fields2slots(rawFields)
    expect(barCode).toEqual(correctBarCode)
  })
  test('## Codigo de barras do enunciado', () => {
    // repare ç
    const linhaDigitavel = [...'21290001192110001210904475617405ç75870000002000']
    const correctBarCode = [...'2129ç758700000020000001121100012100447561740']
    const { barCode } = fields2slots(linhaDigitavel)
    expect(barCode).toEqual(correctBarCode)
  })
})
