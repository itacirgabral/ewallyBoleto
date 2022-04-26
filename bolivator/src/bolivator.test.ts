import { describe, expect, test } from '@jest/globals'
import Bolivator from '../../bolivator/src'

describe('# Validador de boletos', () => {
  test('## exemplo do enunciado', () => {
    const boleto = new Bolivator('21290001192110001210904475617405975870000002000')

    const allOK = boleto.dvxOK &&
      boleto.dvyOK &&
      boleto.dvzOK &&
      boleto.barCodeOK

    expect(allOK).toBeTruthy()
  })
})
