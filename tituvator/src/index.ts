import { listy } from './linhaDigitavel'
import slicer from './slicer'
import dac10 from './dac10'
import dac11 from './dac11'
import totalismo from './totalismo'

export default class Tituvator {
  private slotsA: Array<number>
  private dvA: number
  private slotsB: Array<number>
  private dvB: number
  private slotsC: Array<number>
  private dvC: number
  private slotsD: Array<number>
  private dvD: number

  private slotsP: Array<number>

  readonly barCode: Array<number>

  private isDac10: boolean

  readonly dvaOK: boolean
  readonly dvbOK: boolean
  readonly dvcOK: boolean
  readonly dvdOK: boolean
  readonly barCodeOK: boolean
  readonly amount: number

  constructor (private linhaDigitavel: string) {
    const rawFields = listy(linhaDigitavel)
    const allSlots = slicer(rawFields)
    this.slotsA = allSlots.slotsA
    this.dvA = allSlots.dvA
    this.slotsB = allSlots.slotsB
    this.dvB = allSlots.dvB
    this.slotsC = allSlots.slotsC
    this.dvC = allSlots.dvC
    this.slotsD = allSlots.slotsD
    this.dvD = allSlots.dvD

    this.barCode = allSlots.barCode

    this.isDac10 = allSlots.isDac10

    this.slotsP = allSlots.slotsP

    if (this.isDac10) {
      this.dvaOK = dac10(this.slotsA) === this.dvA
      this.dvbOK = dac10(this.slotsB) === this.dvB
      this.dvcOK = dac10(this.slotsC) === this.dvC
      this.dvdOK = dac10(this.slotsD) === this.dvD
    } else {
      this.dvaOK = dac11(this.slotsA) === this.dvA
      this.dvbOK = dac11(this.slotsB) === this.dvB
      this.dvcOK = dac11(this.slotsC) === this.dvC
      this.dvdOK = dac11(this.slotsD) === this.dvD
    }

    this.barCodeOK = dac11([
      ...this.barCode.slice(0, 3),
      ...this.barCode.slice(4)
    ]) === this.barCode[3]

    this.amount = totalismo(this.slotsP)
  }
}
