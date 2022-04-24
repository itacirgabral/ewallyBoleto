import { listy } from './linhaDigitavel'
import fields2slots from './fields2slots'
import dac10 from './dac10'
import { fatorVencimento2days, makeExpirationDate } from './tetrapak'
import totalismo from './totalismo'

export default class Bolivator {
  // Campo 1
  private slotsA: Array<number> // Número Código da IF Destinatária no SILOC
  private slotB: number //  Código da moeda (9) -Real
  private slotsC: Array<number> // Posições 20 a 24 do código de barras
  private slotX: number //  = Digito Verificador do Campo 1 Módulo 10

  // Campo 2
  private slotsD: Array<number> // Posições 25 a 34 do código de barras
  private slotY: number //  = Digito Verificador do Campo 2 Módulo 10

  // Campo 3
  private slotsE: Array<number> // Posições 35 a 44 do código de barras
  private slotZ: number //  = Digito Verificador do Campo 3 Módulo 10

  // Campo 4
  private slotK: number //  = Digito Verificador do código de barras Módulo 11

  // Campo 5
  private slotsU: Array<number> //  Fator de Vencimento
  private slotsV: Array<number> //  Valor do boleto de pagamento

  // Estariam os digitos verificadores do campesinato corretos?
  readonly dvxOK: boolean
  readonly dvyOK: boolean
  readonly dvzOK: boolean

  readonly goodFor: Date
  readonly amount: number

  constructor (private linhaDigitavel: string) {
    const rawFields = listy(linhaDigitavel)
    const allSlots = fields2slots(rawFields)
    this.slotsA = allSlots.slotsA
    this.slotB = allSlots.slotB
    this.slotsC = allSlots.slotsC
    this.slotX = allSlots.slotX
    this.slotsD = allSlots.slotsD
    this.slotY = allSlots.slotY
    this.slotsE = allSlots.slotsE
    this.slotZ = allSlots.slotZ
    this.slotK = allSlots.slotK
    this.slotsU = allSlots.slotsU
    this.slotsV = allSlots.slotsV

    this.dvxOK = dac10([...this.slotsA, this.slotB, ...this.slotsC]) === this.slotX
    this.dvyOK = dac10(this.slotsD) === this.slotY
    this.dvzOK = dac10(this.slotsE) === this.slotZ

    this.goodFor = makeExpirationDate(fatorVencimento2days(this.slotsU))
    this.amount = totalismo(this.slotsV)
  }
}
