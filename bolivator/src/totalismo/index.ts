// fatorTotal = [0, 0, 0, 0, 0, 0, 0, 2, 0, 0]
const totalismo = (fatorTotal: Array<number>, digits = 2) => Number.parseFloat(`${
  fatorTotal.slice(0, fatorTotal.length - digits).join('')
}.${
  fatorTotal.slice(fatorTotal.length - digits).join('')
}`)

export default totalismo
