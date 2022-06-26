"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Normaliza o dígito para títulos

 * @param n Inteiro de 0 a 11
 * @returns
 */
const normalizeDac11 = (n) => {
    switch (n) {
        case 10:
        case 11:
            return 0;
        default:
            return n;
    }
};
exports.default = normalizeDac11;
