export default class Tituvator {
    private linhaDigitavel;
    private slotsA;
    private dvA;
    private slotsB;
    private dvB;
    private slotsC;
    private dvC;
    private slotsD;
    private dvD;
    private slotsP;
    readonly barCode: Array<number>;
    private isDac10;
    readonly dvaOK: boolean;
    readonly dvbOK: boolean;
    readonly dvcOK: boolean;
    readonly dvdOK: boolean;
    readonly barCodeOK: boolean;
    readonly amount: number;
    constructor(linhaDigitavel: string);
}
