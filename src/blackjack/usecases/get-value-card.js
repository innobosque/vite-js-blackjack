/**
 * Función para obtener los puntos de una carta
 * @param {string} valueCard Valor de una carta. Ejemplo: 2H
 * @returns {number} Retorna el valor numérico de una carta. Ejemplo 2
*/
export const getValueCard = valueCard => {
    if(!Boolean(valueCard) || !isNaN(valueCard))
        throw new Error('valueCard error: no puede estar vacío o tiene que ser String');
    valueCard = valueCard.substring(0, valueCard.length - 1);//Descartamos el último dígito
    return !isNaN(valueCard) ? Number.parseInt(valueCard)
        : valueCard === 'A' ? 11 : 10;
}