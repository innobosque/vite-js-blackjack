import { dealCards } from '../../../../src/blackjack/usecases/deck-deal';
describe('Testeo del fichero desck-deal', () => {
    const deckTemporal = ['5S', '2H', '3H', 'AD', '8D', '6C', '6H', 'AS', '4D', '9S', '6D', 'AH', '7C', '9D', 'JD', '3D', '7H', '5C', 'JC', '4C', '5D', '2S', 'QD', '8C', '9C', 'QH', 'KH', 'KC', '6S', '2C', 'QS', 'QC', '4S', '2D', '7D', '3S', '8S', '8H', '10S', 'AC', '10C', 'JH', '10D', '7S', '10H', '5H', 'KS', '4H', 'KD', 'JS', '9H', '3C'];
    
    test('Prueba de deckDeal() sin parámetros', () => {
        expect(
            () => {
                dealCards()
            }).toThrow();
    });

    test('Prueba de deckDeal() con un parámetro', () => {
        expect(
            () => {
                dealCards(['C', 'D', 'H', 'S'])
            }).toThrow();
    });

    test('Prueba de deckDeal() con parámetros adecuados', () => {
        const deck = dealCards(['C', 'D', 'H', 'S'],['A', 'J', 'Q', 'K']);
        expect(deck).toEqual(expect.arrayContaining(deckTemporal));

    })
});

