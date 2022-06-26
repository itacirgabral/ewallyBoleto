/**
 * Configura a comprimento que será verificado
 *
 * @param length
 * @returns function
 */
declare const checkLength: (length: number) => (linhaDigitavel: string) => boolean;
/**
 * Valida se o primeiro caracter é um inteiro
 *
 * @param char
 * @returns
 */
declare const checkCharacter: (char: string) => boolean;
/**
 * Configura a comprimento que será verificado
 *
 * @param length
 * @returns function
 */
declare const listy: (length: number) => (linhaDigitavel: string) => number[];
export { checkLength, checkCharacter, listy };
