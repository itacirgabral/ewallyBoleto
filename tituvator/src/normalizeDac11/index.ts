const normalizeDac11 = (n: number) => {
  switch (n) {
    case 10:
    case 11:
      return 0
    default:
      return n
  }
}

export default normalizeDac11
