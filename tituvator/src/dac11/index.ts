// const tiraQuinto = (barCode: Array<number>) => [...barCode.slice(0, 4), ...barCode.slice(5)]

const base = [2, 3, 4, 5, 6, 7, 8, 9]
const fator2to9 = (idx: number) => base[idx % base.length]

const respelho11 = (n: number) => 11 - n % 11
const dac11 = (sequencia: Array<number>) => {
  // const barCodeDVless = tiraQuinto(sequencia)
  const barCodeDVless = sequencia
  const somatisse = barCodeDVless.reverse().reduce((acc, el, idx) => {
    const fator = fator2to9(idx)

    return acc + fator * el
  }, 0)

  const respelho = respelho11(somatisse)

  /* febraban comeu bola
  ** Quando o resto da divisão for igual a 0 ou 1, atribuí-se ao DV o digito
  ** “0”, e quando for 10, atribuíse ao DV o digito “1”
  */
  switch (respelho) {
    case 10:
    case 11:
      return 0
    default:
      return respelho
  }
}

export {
  // tiraQuinto,
  fator2to9
}

export default dac11
