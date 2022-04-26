import { describe, expect, test } from '@jest/globals'
import Tituvator from '../../tituvator/src'

describe('# Validador de títulos', () => {
  test('## ipva', () => {
    const titulo = new Tituvator('858000000003312301172024204290336657605912000693')

    const allOK = titulo.dvaOK &&
      titulo.dvbOK &&
      titulo.dvcOK &&
      titulo.dvdOK &&
      titulo.barCodeOK

    expect(allOK).toBeTruthy()
  })
  test('## dar', () => {
    const titulo = new Tituvator('858100000013400001232024205316341030249578999000')

    const allOK = titulo.dvaOK &&
      titulo.dvbOK &&
      titulo.dvcOK &&
      titulo.dvdOK &&
      titulo.barCodeOK

    expect(allOK).toBeTruthy()
  })
})
