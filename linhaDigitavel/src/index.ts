const checkLength = (length: number) => (linhaDigitavel: string) => linhaDigitavel.length === length

const checkCharacter = (char: string) => !Number.isNaN(Number.parseInt(char[0]))

const listy = (length: number) => (linhaDigitavel: string) => {
  const preList = [...linhaDigitavel]
  const lengthOK = checkLength(length)(linhaDigitavel)
  const charsOK = preList.every(checkCharacter)

  if (lengthOK && charsOK) {
    return preList.map(Number)
  } else {
    throw new Error(`erro na linha digitavel lengthOK=${lengthOK} charsOK=${charsOK}`)
  }
}

export {
  checkLength,
  checkCharacter,
  listy
}
