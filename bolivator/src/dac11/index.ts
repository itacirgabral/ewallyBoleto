const tiraQuinto = (barCode: Array<number>) => [...barCode.slice(0, 4), ...barCode.slice(5)]

const base = [2, 3, 4, 5, 6, 7, 8, 9]
const fator2to9 = (idx: number) => base[idx % base.length]

const respelho11 = (n: number) => 11 - n % 11
const dac11 = (sequencia: Array<number>) => {
  const barCodeDVless = tiraQuinto(sequencia)
  const somatisse = barCodeDVless.reverse().reduce((acc, el, idx) => {
    const fator = fator2to9(idx)

    return acc + fator * el
  }, 0)

  const respelho = respelho11(somatisse)

  switch (respelho) {
    case 0:
    case 10:
    case 11:
      return 1
    default:
      return respelho
  }
}

export {
  tiraQuinto,
  fator2to9
}

export default dac11
