/**
 * Segundo as regras de negócio, secciona a linha digitavel em campos claramente
 * nomeados
 *
 * @param rawFields Vetor original da linha digitavel
 * @returns segmentos decodificados
 */
declare const slicer: <Type>(rawFields: Type[]) => {
    slotsA: Type[];
    dvA: Type;
    slotsB: Type[];
    dvB: Type;
    slotsC: Type[];
    dvC: Type;
    slotsD: Type[];
    dvD: Type;
    slotsP: Type[];
    barCode: Type[];
    isDac10: boolean;
};
export default slicer;
