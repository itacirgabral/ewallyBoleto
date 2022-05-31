/**
 * Segundo as regras de negócio, secciona a linha digitavel em campos claramente
 * nomeados
 *
 * @param rawFields Vetor original da linha digitavel
 * @returns segmentos decodificados
 *
 * @example
 *  2129 00011 9 2110001210 9 0447561740 5 ç 75870000002000 // enunciado entrada
 *  0123 45678 9 0123456789 0 1234567890 1 2 34567890123456 // guia de indice
 *  aaaa iiiii _ oooooooooo _ uuuuuuuuuu _ ç eeeeeeeeeeeeee // entrada blocos
 *
 *  2129 ç 75870000002000 00011 2110001210 0447561740 // enunciado saida
 *  aaaa ç eeeeeeeeeeeeee iiiii oooooooooo uuuuuuuuuu // saida blocos
 */
const slicer = <Type>(rawFields: Array<Type>) => {
  // AAABC.CCCCX DDDDD.DDDDDY EEEEE.EEEEEZ K UUUUVVVVVVVVVV
  // 01234.56789 01234.567890 12345.678901 2 34567890123456
  const slotsA = rawFields.slice(0, 3) // Codigo do banco
  const slotB = rawFields[3] // Codigo moeda
  const slotsC = rawFields.slice(4, 9) // Posições 20 a 24 do código de barras
  const slotX = rawFields[9] // DV do Campo 1

  const slotsD = rawFields.slice(10, 20) // Posições 25 a 34 do código de barras
  const slotY = rawFields[20] // DV do campo 2

  const slotsE = rawFields.slice(21, 31) // Posições 35 a 44 do código de barras
  const slotZ = rawFields[31] // DV do campo 3

  const slotK = rawFields[32] // DV do código de barras

  const slotsU = rawFields.slice(33, 37) // Data vencimento
  const slotsV = rawFields.slice(37, 47) // Valor

  const barCode = [
    ...rawFields.slice(0, 4),
    rawFields[32],
    ...rawFields.slice(33, 47),
    ...rawFields.slice(4, 9),
    ...rawFields.slice(10, 20),
    ...rawFields.slice(21, 31)
  ]

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
    slotsV,
    barCode
  }
}

export default slicer
