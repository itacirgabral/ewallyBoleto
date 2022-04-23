import { listy } from './linhaDigitavel'
import fields2slots from './fields2slots'

export default class Bolivator {
  // Campo 1
  readonly slotsA: Array<number> // Número Código da IF Destinatária no SILOC
  readonly slotB: number //  Código da moeda (9) -Real
  readonly slotsC: Array<number> // Posições 20 a 24 do código de barras
  readonly slotX: number //  = Digito Verificador do Campo 1 Módulo 10

  // Campo 2
  readonly slotsD: Array<number> // Posições 25 a 34 do código de barras
  readonly slotY: number //  = Digito Verificador do Campo 2 Módulo 10

  // Campo 3
  readonly slotsE: Array<number> // Posições 35 a 44 do código de barras
  readonly slotZ: number //  = Digito Verificador do Campo 3 Módulo 10

  // Campo 4
  readonly slotK: number //  = Digito Verificador do código de barras Módulo 11

  // Campo 5
  readonly slotsU: Array<number> //  Fator de Vencimento
  readonly slotsV: Array<number> //  Valor do boleto de pagamento

  constructor (private linhaDigitavel: string) {
    // AAABC.CCCCX DDDDD.DDDDDY EEEEE.EEEEEZ K UUUUVVVVVVVVVV
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
    // orientacao a objeto sendo verboso ...
    // bem que podia destruir
  }
}
