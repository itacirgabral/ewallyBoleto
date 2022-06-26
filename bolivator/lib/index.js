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
const tetrapak_1 = require("tetrapak");
const totalismo_1 = __importDefault(require("totalismo"));
const boletoLength = 47;
class Bolivator {
    constructor(linhaDigitavel) {
        this.linhaDigitavel = linhaDigitavel;
        const rawFields = (0, linhaDigitavel_1.listy)(boletoLength)(linhaDigitavel);
        const allSlots = (0, slicer_1.default)(rawFields);
        this.slotsA = allSlots.slotsA;
        this.slotB = allSlots.slotB;
        this.slotsC = allSlots.slotsC;
        this.slotX = allSlots.slotX;
        this.slotsD = allSlots.slotsD;
        this.slotY = allSlots.slotY;
        this.slotsE = allSlots.slotsE;
        this.slotZ = allSlots.slotZ;
        this.slotK = allSlots.slotK;
        this.slotsU = allSlots.slotsU;
        this.slotsV = allSlots.slotsV;
        this.barCode = allSlots.barCode;
        this.dvxOK = (0, dac10_1.default)([...this.slotsA, this.slotB, ...this.slotsC]) === this.slotX;
        this.dvyOK = (0, dac10_1.default)(this.slotsD) === this.slotY;
        this.dvzOK = (0, dac10_1.default)(this.slotsE) === this.slotZ;
        this.barCodeOK = (0, normalizeDac11_1.default)((0, dac11_1.default)([
            ...this.barCode.slice(0, 4),
            ...this.barCode.slice(5)
        ])) === this.barCode[4];
        this.goodFor = (0, tetrapak_1.makeExpirationDate)((0, tetrapak_1.fatorVencimento2days)(this.slotsU));
        this.amount = (0, totalismo_1.default)(this.slotsV);
    }
}
exports.default = Bolivator;
