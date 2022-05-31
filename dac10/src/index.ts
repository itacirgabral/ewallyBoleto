/**
 * Costante definida como base dos cofatores
 */
const base = [2, 1]

/**
 * Gera o cofator associado ao índice
 *
 * @param idx indice
 * @returns cofator
 */
const fator21 = (idx: number) => base[idx % base.length]

/**
 * Soma cada algarismo de um número recursivamente até ser um dígito
 *
 * @param n Valor original
 * @returns Valor encolhido
 */
const charRedutor = (n: number): number => {
  const stringy = String(n)
  const summy = [...stringy].reduce((acc, el) => acc + Number(el), 0)

  if (summy < 10) {
    return summy
  } else {
    return charRedutor(summy)
  }
}

/**
 * Calcula o que falta até 10 do resto de 10
 *
 * @param n Valor inteiro positivo
 * @returns Valor normalizado
 */
const respelho10 = (n: number) => 10 - n % 10

/**
 * Calcula o dígito verificador utilizando módulo 10
 *
 * @param sequencia Vetor de inteiro correspondente a linha digitavel
 * @returns Inteiro positivo
 */
const dac10 = (sequencia: Array<number>) => {
  // contando da direita pra esquerda
  const reversed = sequencia.reverse()

  // gerando vetor equivalente com os cofatore
  const cofator = Array(reversed.length)
    .fill(undefined)
    .map((_el, idx) => fator21(idx))

  // multiplicando o elemento com seu respectivo cofator
  const coplay = Array(reversed.length)
    .fill(undefined)
    .map((_el, idx) => reversed[idx] * cofator[idx])

  // reduzindo cada elemento a um caracter
  const chartor = Array(reversed.length)
    .fill(undefined)
    .map((_el, idx) => charRedutor(coplay[idx]))

  // somando todos os elementos
  const total = chartor.reduce((acc, el) => acc + el, 0)

  // invertendo
  const respelho = respelho10(total)

  // 10 -> 0; 11 -> 1
  const normalized = respelho % 10

  return normalized
}

export {
  fator21,
  charRedutor,
  respelho10
}

export default dac10
