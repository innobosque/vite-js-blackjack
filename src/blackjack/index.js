import { 
    dealCards, 
    askForACardDeck, 
    getValueCard, 
    createCardElement } from './usecases';




/**
 * Blackjack
 * 2C Two of clubs (tréboles)
 * 2D Two of diamonds
 * 2H Two of Heards
 * 2S Two of Spades
*/


//import _ from './underscore-esm-min.js';//Versión de módulos underscore-esm-min.js
let points =            []; //Puntos de los jugadores. El último elemento del Array es el de la computadora

let deck =              []; //deck => "Cartas"; //let para poder sobreescrir el array
const types =           ['C', 'D', 'H', 'S'],//clubs,diamonds,heards,spades
        specialTypes =    ['A', 'J', 'Q', 'K'];//as,jack,queen,king
//Referencias HTML
const pointsEl =       document.querySelectorAll('small'),
        cardsEl =        document.querySelectorAll('.cartas');
const btnAskForEl =    document.querySelector('#btn-ask-for'),
        btnStopEl =      document.querySelector('#btn-stop-game'),
        btnNewGameEl =   document.querySelector('#btn-new-game');

/**
 * Función con la que inicializamos o reiniciamos el juego
 * @param {number} playersNumber - Número de jugadores. Por escabilidad del programa
 */
const initGame = (playersNumber = 1) => {
    console.clear();//limpiamos consola    
    deck = dealCards(types, specialTypes);
    points = Array.from([...Array(playersNumber + 1)],()=>0);
    btnAskForEl.disabled = false;
    btnStopEl.disabled = false;
    points[points.length - 1] = 0;
    points[0] = 0;
    cardsEl[0].innerHTML = '';
    cardsEl[points.length - 1].innerHTML = '';
    pointsEl[0].textContent = pointsEl[1].textContent = 0;
}    
    

/**
 * Función para llevar el registro de puntos de un usuario
 * @param {number} indexPlayer - Índice del jugador para llevar el contador de puntos
 * @param {number} pointsValue - Valor numérico de la carta para llevar los puntos
 */
const countPoints = (indexPlayer, pointsValue) => {
    points[indexPlayer] += pointsValue;
}

/**
 * Turno automatizado de la computadora
 * @param {Number} pointsMinValue Puntos mínimos que tiene que superar la compuradora
*/
const gameComputer = (pointsMinValue = 12) => {
    const computerIndex = points.length - 1;
    do {
        const {card} = askForACardDeck(deck);
        createCardElement(cardsEl[computerIndex],card);   
        countPoints(computerIndex,getValueCard(card));
    } while(points[computerIndex] < pointsMinValue && pointsMinValue < 21);
    
    pointsEl[1].textContent = points[computerIndex];
}


/**
 * EVENTOS 
*/  
btnAskForEl.addEventListener(
    'click',
    ()=>{
        const {card} = askForACardDeck(deck);
        createCardElement(cardsEl[0],card);
        countPoints(0,getValueCard(card));            
        if(points[0] > 21){
            console.log('Perdiste');
            gameComputer(points[0]);
            btnAskForEl.disabled = true;
            btnStopEl.disabled = true;
        } else if(points[0] === 21){
            console.warn('Ganaste Genial');
            btnAskForEl.disabled = true;
            btnStopEl.disabled = true;
        }        
        pointsEl[0].textContent = points[0];    
    }
);
    
    
btnStopEl.addEventListener(
    'click',
    () => {
        btnAskForEl.disabled = true;
        btnStopEl.disabled = true;
        gameComputer(points[0]);
        if(points[points.length-1] < 22 && points[points.length-1] >= points[0])
        console.log('Perdiste');
        else
        console.warn('Ganaste Genial');
        
    }
);
        
btnNewGameEl.onclick = () => {
    initGame();
}