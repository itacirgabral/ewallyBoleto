/**
 * Gera o cofator associado ao índice
 *
 * @param idx indice
 * @returns cofator
 */
declare const fator2to9: (idx: number) => number;
/**
 * Calcula o dígito verificador utilizando módulo 11
 *
 * @param sequencia Vetor de inteiro correspondente a linha digitavel
 * @returns Inteiro positivo
 */
declare const dac11: (sequencia: Array<number>) => number;
export { fator2to9 };
export default dac11;
