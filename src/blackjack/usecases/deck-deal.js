import _ from 'underscore';
/**
 * Generamos el array de cartas barajadas (deal cards)
 * @param { Array<string> } types - Ejemplo: ['C', 'D', 'H', 'S'] clubs,diamonds,heards,spades
 * @param { Array<string> } specialTypes - Ejemplo: ['A', 'J', 'Q', 'K'] as,jack,queen,king
 * @returns { Array<string> } - Cartas repartidas desordenadas
*/
export const dealCards = (types, specialTypes) => {
    if(!Boolean(types) || !Boolean(specialTypes))
        throw new Error('No pueden faltar los argumentos types o specialTypes');
    let deckTemporal = [];//Array temporal

    types?.forEach(type => {
        const normal = [...Array(9)].map((el, i) => `${i + 2}${type}`)
        deckTemporal = [...deckTemporal, ...normal]
    });

    specialTypes?.forEach(specialType => {
        const specials = Array.from(
            types,
            (type) => `${specialType}${type}`);
        deckTemporal = [...deckTemporal, ...specials];
    });

    //Cada vez que creemos desordenamos
    //return deckTemporal.sort((a,b)=>Math.random()-0.5);

    return _.shuffle(deckTemporal);
}