/**
 * Segundo as regras de negócio, secciona a linha digitavel em campos claramente
 * nomeados
 *
 * @param rawFields Vetor original da linha digitavel
 * @returns segmentos decodificados
 *
 * @example
 *  2129 00011 9 2110001210 9 0447561740 5 ç 75870000002000 // enunciado entrada
 *  0123 45678 9 0123456789 0 1234567890 1 2 34567890123456 // guia de indice
 *  aaaa iiiii _ oooooooooo _ uuuuuuuuuu _ ç eeeeeeeeeeeeee // entrada blocos
 *
 *  2129 ç 75870000002000 00011 2110001210 0447561740 // enunciado saida
 *  aaaa ç eeeeeeeeeeeeee iiiii oooooooooo uuuuuuuuuu // saida blocos
 */
declare const slicer: <Type>(rawFields: Type[]) => {
    slotsA: Type[];
    slotB: Type;
    slotsC: Type[];
    slotX: Type;
    slotsD: Type[];
    slotY: Type;
    slotsE: Type[];
    slotZ: Type;
    slotK: Type;
    slotsU: Type[];
    slotsV: Type[];
    barCode: Type[];
};
export default slicer;
