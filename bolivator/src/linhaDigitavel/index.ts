const checkLength = (linhaDigitavel: string) => linhaDigitavel.length === 47

const checkCharacter = (char: string) => !Number.isNaN(Number.parseInt(char[0]))

const listy = (linhaDigitavel: string) => {
  const preList = [...linhaDigitavel]
  const lengthOK = checkLength(linhaDigitavel)
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
