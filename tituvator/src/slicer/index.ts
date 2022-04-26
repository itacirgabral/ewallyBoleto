const slicer = <Type>(rawFields: Array<Type>) => {
  const slotsA = rawFields.slice(0, 11)
  const dvA = rawFields[11]

  const slotsB = rawFields.slice(12, 23)
  const dvB = rawFields[23]

  const slotsC = rawFields.slice(24, 35)
  const dvC = rawFields[35]

  const slotsD = rawFields.slice(36, 47)
  const dvD = rawFields[47]

  const slotsP = rawFields.slice(4, 15)

  const barCode = [
    ...slotsA,
    ...slotsB,
    ...slotsC,
    ...slotsD
  ]

  const codigoMoeda = Number(rawFields[3])
  const isDac10 = codigoMoeda === 6 || codigoMoeda === 7

  return {
    slotsA,
    dvA,
    slotsB,
    dvB,
    slotsC,
    dvC,
    slotsD,
    dvD,
    slotsP,
    barCode,
    isDac10
  }
}

export default slicer
