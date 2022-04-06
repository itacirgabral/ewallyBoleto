const fator21 = el => el % 2 === 0 ? 2 : 1

const somatisse = sequencia => sequencia
  .split('')
  .reduceRight((acc, el, idx, arr) => {
    const fator = fator21(arr.length - idx + 1)

    return String(fator * Number(el))
      .split('')
      .reduce((a, el) =>  a + Number(el), acc)
  }, 0)

const dac10 = sequencia => 10 - somatisse(sequencia) % 10

module.exports = {
  fator21,
  somatisse,
  dac10
}