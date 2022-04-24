// Na documentacao da febaban explica melhor

const fator21 = (idx: number) => idx % 2 === 0 ? 2 : 1

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
  const somatisse = sequencia.reduceRight((acc, el, idx, arr) => {
    const fator = fator21(arr.length - idx + 1) // reduceRight também reverte os índices

    return acc + charRedutor(fator * el)
  }, 0)

  return respelho10(somatisse)
}

export {
  fator21,
  charRedutor,
  respelho10
}

export default dac10
