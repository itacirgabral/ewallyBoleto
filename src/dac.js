const fator21 = el => el % 2 === 0 ? 2 : 1

const somatisse = sequencia => sequencia
  .split('')
  .reduceRight((acc, el, idx, arr) => {
    const fator = fator21(arr.length - idx + 1) // reduceRight também reverte os índices

    return String(fator * Number(el))
      .split('')
      .reduce((a, b) => a + Number(b), acc)
  }, 0)

const dac10 = sequencia => 10 - somatisse(sequencia) % 10

module.exports = {
  fator21,
  somatisse,
  dac10
}

/*
  // macete geral
  '139'.split('') -> ['1', '3', '9']
  reduce((a, b) => a + Number(b), 80) -> 1 + 3 + 9 + 80
*/
