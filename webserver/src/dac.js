const fator21 = el => el % 2 === 0 ? 2 : 1

const somatisse = sequencia => [...sequencia]
  .reduceRight((acc, el, idx, arr) => {
    const fator = fator21(arr.length - idx + 1) // reduceRight também reverte os índices

    return [...String(fator * Number(el))]
      .reduce((a, b) => a + Number(b), acc)
  }, 0)

const dac10 = sequencia => 10 - somatisse(sequencia) % 10

module.exports = {
  fator21,
  somatisse,
  dac10
}
