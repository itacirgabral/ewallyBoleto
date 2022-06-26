export default class Bolivator {
    private linhaDigitavel;
    private slotsA;
    private slotB;
    private slotsC;
    private slotX;
    private slotsD;
    private slotY;
    private slotsE;
    private slotZ;
    private slotK;
    private slotsU;
    private slotsV;
    readonly barCode: Array<number>;
    readonly dvxOK: boolean;
    readonly dvyOK: boolean;
    readonly dvzOK: boolean;
    readonly barCodeOK: boolean;
    readonly goodFor: Date;
    readonly amount: number;
    constructor(linhaDigitavel: string);
}
