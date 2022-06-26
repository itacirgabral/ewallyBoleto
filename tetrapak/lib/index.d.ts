/**
 * Constante definida como origem do calendário
 */
declare const originDate: Date;
/**
 * Calcula a data do vencimento
 *
 * @param days - Quantidade de dias inteiros
 * @returns Data gregoriana após os dias
 */
declare const makeExpirationDate: (days?: number) => Date;
/**
 * Extrai a quantidade de dias da fatoração em dígitos
 *
 * @param fatorVencimento - Vetor de inteiros
 * @returns total de dias
 */
declare const fatorVencimento2days: (fatorVencimento: Array<number>) => number;
export { originDate, fatorVencimento2days, makeExpirationDate };
