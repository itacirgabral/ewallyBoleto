// 7 de outubro de 1997
const originDate = new Date('1997/oct/07')

const makeExpirationDate = (days: number) => {
  // does not mutate the original date value!
  const cloneDate = new Date(originDate)
  cloneDate.setDate(cloneDate.getDate() + days)

  return cloneDate
}

// fatorVencimento = [1, 0, 0, 1]
const fatorVencimento2days = (fatorVencimento: Array<number>) => Number.parseInt(fatorVencimento
  .map(String)
  .join(''))

export {
  originDate,
  fatorVencimento2days,
  makeExpirationDate
}
