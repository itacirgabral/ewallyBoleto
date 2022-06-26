"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listy = exports.checkCharacter = exports.checkLength = void 0;
/**
 * Configura a comprimento que será verificado
 *
 * @param length
 * @returns function
 */
const checkLength = (length) => 
/**
 * Valida se o comprimento é adequado
 *
 * @param linhaDigitavel
 * @returns
 */
(linhaDigitavel) => linhaDigitavel.length === length;
exports.checkLength = checkLength;
/**
 * Valida se o primeiro caracter é um inteiro
 *
 * @param char
 * @returns
 */
const checkCharacter = (char) => !Number.isNaN(Number.parseInt(char[0]));
exports.checkCharacter = checkCharacter;
/**
 * Configura a comprimento que será verificado
 *
 * @param length
 * @returns function
 */
const listy = (length) => 
/**
 * Valida se a linha digitável possui o comprimento correto, contém apenas
 * digitos e a transforma num vetor de inteiros
 *
 * @param linhaDigitavel
 * @returns vetor de inteiros
 */
(linhaDigitavel) => {
    const preList = [...linhaDigitavel];
    const lengthOK = checkLength(length)(linhaDigitavel);
    const charsOK = preList.every(checkCharacter);
    if (lengthOK && charsOK) {
        return preList.map(Number);
    }
    else {
        throw new Error(`erro na linha digitavel lengthOK=${lengthOK} charsOK=${charsOK}`);
    }
};
exports.listy = listy;
