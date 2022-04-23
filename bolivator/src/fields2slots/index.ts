// AAABC.CCCCX DDDDD.DDDDDY EEEEE.EEEEEZ K UUUUVVVVVVVVVV
// 01234.56789 01234.567890 12345.678901 2 34567890123456

const fields2slots = <Type>(rawFields: Array<Type>) => {
  const slotsA = rawFields.slice(0, 3)
  const slotB = rawFields[3]
  const slotsC = rawFields.slice(4, 9)
  const slotX = rawFields[9]
  const slotsD = rawFields.slice(10, 20)
  const slotY = rawFields[20]
  const slotsE = rawFields.slice(21, 31)
  const slotZ = rawFields[31]
  const slotK = rawFields[32]
  const slotsU = rawFields.slice(33, 37)
  const slotsV = rawFields.slice(37, 47)

  return {
    slotsA,
    slotB,
    slotsC,
    slotX,
    slotsD,
    slotY,
    slotsE,
    slotZ,
    slotK,
    slotsU,
    slotsV
  }
}

export default fields2slots
