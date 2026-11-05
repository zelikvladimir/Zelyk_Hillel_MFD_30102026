/**
 * 2.5
 * Умова: Розкласти по цифрах п'ятизначне число і вивести у вихідному порядку через пробіл (використовувати оператор "розподіл по модулю" (%)).
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const number = getRandomInt(10000, 99999);
let rest  = number;
let result = "";

while (rest  > 0) {
    let digit = rest  % 10;
    result = digit + (result ? " " + result : "");
    rest  = Math.floor(rest / 10);
}

console.log(`Розподіл числа ${number} по модулю (%): ${result}`);

console.log(`Інший варіант (toString + split + join): ${number.toString().split('').join(' ')}`);
