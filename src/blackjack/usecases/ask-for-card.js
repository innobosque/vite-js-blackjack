/**
* Función que pide una carta de la baraja
* @param { Array<string> } deck - Cartas de la baraja
* @returns { object } - Retorna la carta eliminada de la baraja. Ejemplo : {card: 'JH'}
*/
export const askForACardDeck = deck => {
    if (!Boolean(deck?.length))
        throw new Error('No hay cartas en la baraja');
    return { card: deck.pop() }; //Retornamos el elemento eliminado
}