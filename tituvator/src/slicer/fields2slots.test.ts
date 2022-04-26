import { describe, expect, test } from '@jest/globals'
import slicer from '.'

const rawFields = [
  'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'A',
  'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'E',
  'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'I',
  'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'O'
]

describe('# CONVERSAO DE CAMPOS PARA ATRIBUTOS PRIVADOS', () => {
  test('## Primeiro campo', () => {
    const { slotsA, dvA } = slicer(rawFields)
    expect(slotsA).toEqual(['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'])
    expect(dvA).toEqual('A')
  })
  test('## Segundo campo', () => {
    const { slotsB, dvB } = slicer(rawFields)
    expect(slotsB).toEqual(['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'])
    expect(dvB).toEqual('E')
  })
  test('## Terceiro campo', () => {
    const { slotsC, dvC } = slicer(rawFields)
    expect(slotsC).toEqual(['i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i'])
    expect(dvC).toEqual('I')
  })
  test('## Quarto campo', () => {
    const { slotsD, dvD } = slicer(rawFields)
    expect(slotsD).toEqual(['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'])
    expect(dvD).toEqual('O')
  })
})
