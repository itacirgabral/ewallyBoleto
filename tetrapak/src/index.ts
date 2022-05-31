/**
 * Constante definida como origem do calendário
 */
const originDate = new Date('1997/oct/07')

/**
 * Calcula a data do vencimento
 *
 * @param days - Quantidade de dias inteiros
 * @returns Data gregoriana após os dias
 */
const makeExpirationDate = (days = 0) => {
  // does not mutate the original date value!
  const cloneDate = new Date(originDate)
  cloneDate.setDate(cloneDate.getDate() + days)

  return cloneDate
}

/**
 * Extrai a quantidade de dias da fatoração em dígitos
 *
 * @param fatorVencimento - Vetor de inteiros
 * @returns total de dias
 */
const fatorVencimento2days = (fatorVencimento: Array<number>) => Number.parseInt(fatorVencimento
  .map(String)
  .join(''))

export {
  originDate,
  fatorVencimento2days,
  makeExpirationDate
}
