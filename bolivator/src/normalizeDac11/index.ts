const normalizeDac11 = (n: number) => {
  switch (n) {
    case 0:
    case 10:
    case 11:
      return 1
    default:
      return n
  }
}

export default normalizeDac11
