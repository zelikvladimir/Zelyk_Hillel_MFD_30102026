/**
 * 3.7
 * Умова: Дано тризначне число.
 * - Чи правда, що всі цифри однакові?
 * - Чи є серед цифр цифри однакові?
 */
const number = getRandomInt(100, 999);
const hundreds = Math.floor(number / 100);
const tens = Math.floor(number / 10) % 10;
const units = number % 10;

console.log(`Число: ${number}, цифри: ${hundreds}, ${tens}, ${units}`);

if (hundreds === tens && tens === units) {
    console.log('Усі цифри однакові: так');
} else {
    console.log('Усі цифри однакові: ні');
}

if (hundreds === tens || tens === units || hundreds === units) {
    console.log('Серед цифр є однакові: так');
} else {
    console.log('Серед цифр є однакові: ні');
}
