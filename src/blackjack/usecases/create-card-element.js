/**
 * Creación del elemento de una carta (nodo)
 * @param {DOMHTMLElement} rootEl - Elemento de que colgar la imagen creada
 * @param {String} cardValue - Valor de la carta para generar la src de la imagen 
*/
export const createCardElement = (rootEl,cardValue = '10C') => {
    const imgEl = document.createElement('img');
    imgEl.classList.add('carta');
    imgEl.src = `assets/cartas/${cardValue}.png`;
    rootEl.append(imgEl);
 }