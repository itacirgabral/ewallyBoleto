/**
 * Configura a comprimento que será verificado
 *
 * @param length
 * @returns function
 */
const checkLength = (length: number) =>
  /**
   * Valida se o comprimento é adequado
   *
   * @param linhaDigitavel
   * @returns
   */
  (linhaDigitavel: string) => linhaDigitavel.length === length

/**
 * Valida se o primeiro caracter é um inteiro
 *
 * @param char
 * @returns
 */
const checkCharacter = (char: string) => !Number.isNaN(Number.parseInt(char[0]))

/**
 * Configura a comprimento que será verificado
 *
 * @param length
 * @returns function
 */
const listy = (length: number) =>
  /**
   * Valida se a linha digitável possui o comprimento correto, contém apenas
   * digitos e a transforma num vetor de inteiros
   *
   * @param linhaDigitavel
   * @returns vetor de inteiros
   */
  (linhaDigitavel: string) => {
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
