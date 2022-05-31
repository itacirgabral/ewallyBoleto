/**
 * Costante definida como base dos cofatores
 */
const base = [2, 3, 4, 5, 6, 7, 8, 9]

/**
 * Gera o cofator associado ao índice
 *
 * @param idx indice
 * @returns cofator
 */
const fator2to9 = (idx: number) => base[idx % base.length]

/**
 * Calcula o que falta até 11 do resto de 11
 *
 * @param n Valor inteiro positivo
 * @returns Valor normalizado
 */
const respelho11 = (n: number) => 11 - n % 11

/**
 * Calcula o dígito verificador utilizando módulo 11
 *
 * @param sequencia Vetor de inteiro correspondente a linha digitavel
 * @returns Inteiro positivo
 */
const dac11 = (sequencia: Array<number>) => {
  // contando da direita pra esquerda
  const reversed = sequencia.reverse()

  // gerando vetor equivalente com os cofatore
  const cofator = Array(reversed.length)
    .fill(undefined)
    .map((_el, idx) => fator2to9(idx))

  // multiplicando o elemento com seu respectivo cofator
  const coplay = Array(reversed.length)
    .fill(undefined)
    .map((_el, idx) => reversed[idx] * cofator[idx])

  // somando todos os elementos
  const total = coplay.reduce((acc, el) => acc + el, 0)

  // invertendo
  const respelho = respelho11(total)

  return respelho
}

export {
  fator2to9
}

export default dac11
