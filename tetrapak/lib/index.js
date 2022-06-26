"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeExpirationDate = exports.fatorVencimento2days = exports.originDate = void 0;
/**
 * Constante definida como origem do calendário
 */
const originDate = new Date('1997/oct/07');
exports.originDate = originDate;
/**
 * Calcula a data do vencimento
 *
 * @param days - Quantidade de dias inteiros
 * @returns Data gregoriana após os dias
 */
const makeExpirationDate = (days = 0) => {
    // does not mutate the original date value!
    const cloneDate = new Date(originDate);
    cloneDate.setDate(cloneDate.getDate() + days);
    return cloneDate;
};
exports.makeExpirationDate = makeExpirationDate;
/**
 * Extrai a quantidade de dias da fatoração em dígitos
 *
 * @param fatorVencimento - Vetor de inteiros
 * @returns total de dias
 */
const fatorVencimento2days = (fatorVencimento) => Number.parseInt(fatorVencimento
    .map(String)
    .join(''));
exports.fatorVencimento2days = fatorVencimento2days;
