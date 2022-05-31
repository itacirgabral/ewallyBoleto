/**
 * Extrai o valor total numérico da fatoração em dígitos
 *
 * @param fatorTotal - Vetor de inteiros
 * @param digits - quantos dígitos após a vírgula
 * @returns valor numérico codificado
 */
const totalismo = (fatorTotal: Array<number>, digits = 2) => Number.parseFloat(`${
  fatorTotal.slice(0, fatorTotal.length - digits).join('')
}.${
  fatorTotal.slice(fatorTotal.length - digits).join('')
}`)

export default totalismo
