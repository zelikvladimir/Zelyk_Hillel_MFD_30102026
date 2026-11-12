/**
 * 3.5
 * Умова: Дано двозначне число. Визначити, яка з його цифр більша: перша чи друга?
 */
const number = getRandomInt(10, 99);
const firstDigit = Math.floor(number / 10);
const secondDigit = number % 10;

if (firstDigit > secondDigit) {
    console.log(`Число ${number}: більша перша цифра ${firstDigit}`);
} else if (firstDigit < secondDigit) {
    console.log(`Число ${number}: більша друга цифра ${secondDigit}`);
} else {
    console.log(`Число ${number}: цифри рівні`);
}
