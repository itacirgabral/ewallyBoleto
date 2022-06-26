/**
 * Gera o cofator associado ao índice
 *
 * @param idx indice
 * @returns cofator
 */
declare const fator21: (idx: number) => number;
/**
 * Soma cada algarismo de um número recursivamente até ser um dígito
 *
 * @param n Valor original
 * @returns Valor encolhido
 */
declare const charRedutor: (n: number) => number;
/**
 * Calcula o que falta até 10 do resto de 10
 *
 * @param n Valor inteiro positivo
 * @returns Valor normalizado
 */
declare const respelho10: (n: number) => number;
/**
 * Calcula o dígito verificador utilizando módulo 10
 *
 * @param sequencia Vetor de inteiro correspondente a linha digitavel
 * @returns Inteiro positivo
 */
declare const dac10: (sequencia: Array<number>) => number;
export { fator21, charRedutor, respelho10 };
export default dac10;
