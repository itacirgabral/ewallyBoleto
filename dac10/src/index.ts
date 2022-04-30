// Na documentacao da febaban explica melhor

const base = [2, 1]
const fator21 = (idx: number) => base[idx % base.length]

const charRedutor = (n: number): number => {
  const stringy = String(n)
  const summy = [...stringy].reduce((acc, el) => acc + Number(el), 0)

  if (summy < 10) {
    return summy
  } else {
    return charRedutor(summy)
  }
}

const respelho10 = (n: number) => 10 - n % 10

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

  // se for 10 retorna 0
  return respelho10(total) % 10
}

export {
  fator21,
  charRedutor,
  respelho10
}

export default dac10
