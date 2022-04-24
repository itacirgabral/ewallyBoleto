import { describe, expect, test } from '@jest/globals'
import slicer from '.'

// AAABC.CCCCX DDDDD.DDDDDY EEEEE.EEEEEZ K UUUUVVVVVVVVVV
const rawFields = ['A', 'A', 'A', 'B', 'C', 'C', 'C', 'C', 'C', 'X', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'Y', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'Z', 'K', 'U', 'U', 'U', 'U', 'V', 'V', 'V', 'V', 'V', 'V', 'V', 'V', 'V', 'V']

describe('# CONVERSAO DE CAMPOS PARA ATRIBUTOS PRIVADOS', () => {
  test('## Número Código da IF Destinatária no SILOC', () => {
    const { slotsA } = slicer(rawFields)
    expect(slotsA).toEqual(['A', 'A', 'A'])
  })
  test('## Código da moeda', () => {
    const { slotB } = slicer(rawFields)
    expect(slotB).toEqual('B')
  })
  test('##  Posições 20 a 24 do código de barras', () => {
    const { slotsC } = slicer(rawFields)
    expect(slotsC).toEqual(['C', 'C', 'C', 'C', 'C'])
  })
  test('## Digito Verificador do Campo 1 Módulo 10', () => {
    const { slotX } = slicer(rawFields)
    expect(slotX).toEqual('X')
  })
  test('## Posições 25 a 34 do código de barras', () => {
    const { slotsD } = slicer(rawFields)
    expect(slotsD).toEqual(['D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D'])
  })
  test('## Digito Verificador do Campo 2 Módulo 10', () => {
    const { slotY } = slicer(rawFields)
    expect(slotY).toEqual('Y')
  })
  test('## Posições 35 a 44 do código de barras', () => {
    const { slotsE } = slicer(rawFields)
    expect(slotsE).toEqual(['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'])
  })
  test('## Digito Verificador do Campo 3 Módulo 10', () => {
    const { slotZ } = slicer(rawFields)
    expect(slotZ).toEqual('Z')
  })
  test('## Digito Verificador do código de barras Módulo 11', () => {
    const { slotK } = slicer(rawFields)
    expect(slotK).toEqual('K')
  })
  test('## Fator de Vencimento', () => {
    const { slotsU } = slicer(rawFields)
    expect(slotsU).toEqual(['U', 'U', 'U', 'U'])
  })
  test('## Valor do boleto de pagamento', () => {
    const { slotsV } = slicer(rawFields)
    expect(slotsV).toEqual(['V', 'V', 'V', 'V', 'V', 'V', 'V', 'V', 'V', 'V'])
  })
  test('## Codigo de barras guiado', () => {
    const correctBarCode = [...'AAABKUUUUVVVVVVVVVVCCCCCDDDDDDDDDDEEEEEEEEEE']
    const { barCode } = slicer(rawFields)
    expect(barCode).toEqual(correctBarCode)
  })
  test('## Codigo de barras do enunciado', () => {
    // repare ç
    const linhaDigitavel = [...'21290001192110001210904475617405ç75870000002000']
    const correctBarCode = [...'2129ç758700000020000001121100012100447561740']
    const { barCode } = slicer(linhaDigitavel)
    expect(barCode).toEqual(correctBarCode)
  })
})
