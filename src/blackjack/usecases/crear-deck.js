import _ from 'underscore';

//export const miNombre = 'Felipe';

let deck         = [];

/**
 * Esta funcion retorna un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S'];
 * @param {Array<String>} tiposEspeciales Ejemplo ['A','J','Q','K'];
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if( !tiposDeCarta ) throw new Error('tiposDeCarta es obligatorio');
    if( !tiposDeCarta.length > 0 ) throw new Error('tiposDeCarta tiene que ser un arreglo de string');

    deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );

    return deck;
}


//export default crearDeck;