"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const linhaDigitavel_1 = require("linhaDigitavel");
const slicer_1 = __importDefault(require("./slicer"));
const normalizeDac11_1 = __importDefault(require("./normalizeDac11"));
const dac10_1 = __importDefault(require("dac10"));
const dac11_1 = __importDefault(require("dac11"));
const totalismo_1 = __importDefault(require("totalismo"));
const tituloLength = 48;
class Tituvator {
    constructor(linhaDigitavel) {
        this.linhaDigitavel = linhaDigitavel;
        const rawFields = (0, linhaDigitavel_1.listy)(tituloLength)(linhaDigitavel);
        const allSlots = (0, slicer_1.default)(rawFields);
        this.slotsA = allSlots.slotsA;
        this.dvA = allSlots.dvA;
        this.slotsB = allSlots.slotsB;
        this.dvB = allSlots.dvB;
        this.slotsC = allSlots.slotsC;
        this.dvC = allSlots.dvC;
        this.slotsD = allSlots.slotsD;
        this.dvD = allSlots.dvD;
        this.barCode = allSlots.barCode;
        this.isDac10 = allSlots.isDac10;
        this.slotsP = allSlots.slotsP;
        if (this.isDac10) {
            this.dvaOK = (0, dac10_1.default)(this.slotsA) === this.dvA;
            this.dvbOK = (0, dac10_1.default)(this.slotsB) === this.dvB;
            this.dvcOK = (0, dac10_1.default)(this.slotsC) === this.dvC;
            this.dvdOK = (0, dac10_1.default)(this.slotsD) === this.dvD;
        }
        else {
            this.dvaOK = (0, normalizeDac11_1.default)((0, dac11_1.default)(this.slotsA)) === this.dvA;
            this.dvbOK = (0, normalizeDac11_1.default)((0, dac11_1.default)(this.slotsB)) === this.dvB;
            this.dvcOK = (0, normalizeDac11_1.default)((0, dac11_1.default)(this.slotsC)) === this.dvC;
            this.dvdOK = (0, normalizeDac11_1.default)((0, dac11_1.default)(this.slotsD)) === this.dvD;
        }
        this.barCodeOK = (0, normalizeDac11_1.default)((0, dac11_1.default)([
            ...this.barCode.slice(0, 3),
            ...this.barCode.slice(4)
        ])) === this.barCode[3];
        this.amount = (0, totalismo_1.default)(this.slotsP);
    }
}
exports.default = Tituvator;
