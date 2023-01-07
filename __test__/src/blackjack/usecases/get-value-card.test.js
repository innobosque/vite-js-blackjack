import { getValueCard } from "../../../../src/blackjack/usecases/get-value-card";

test('should pasar la función sin parámetros', () => { 
    expect(()=>getValueCard()).toThrow('valueCard error:');
});

test('should pasar como argumento un número en vez de un string', () => { 
    expect(()=>getValueCard(23)).toThrow('valueCard error:');
});

test('should pasar como argumento string que empiece número', () => { 
    expect(getValueCard('8H')).toBe(8);
});

test('should pasar como argumento string que empiece por letra que no se A', () => { 
    expect(getValueCard('JH')).toBe(10);
});

test('should pasar como argumento string que empiece por letra que sea A', () => { 
    expect(getValueCard('AC')).toBe(11);
});