const base = [2, 3, 4, 5, 6, 7, 8, 9]
const fator2to9 = (idx: number) => base[idx % base.length]

const respelho11 = (n: number) => 11 - n % 11
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

  // o que falta até 11 do resto
  const respelho = respelho11(total)

  return respelho
}

export {
  fator2to9
}

export default dac11
