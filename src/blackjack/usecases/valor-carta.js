

/**
 * 
 * @param {Number} carta 
 * @returns Retorna el valor de la proxima carta de la baraja
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}