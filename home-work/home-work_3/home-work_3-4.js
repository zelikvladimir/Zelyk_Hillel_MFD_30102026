/**
 * 3.4
 * Умова: Дано число. Визначити, чи закінчується воно парною цифрою чи непарною. Вивести останню цифру.
 */
const number = getRandomInt(10, 999);
const lastDigit = number % 10;

if (lastDigit % 2 === 0) {
    console.log(`Число ${number} закінчується парною цифрою: ${lastDigit}`);
} else {
    console.log(`Число ${number} закінчується непарною цифрою: ${lastDigit}`);
}

console.log(`Остання цифра: ${lastDigit}`);
