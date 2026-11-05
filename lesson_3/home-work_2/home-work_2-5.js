/** 2.5 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const number = getRandomInt(10000, 99999);
let number2 = number;
let result = "";

while (number2 > 0) {
    let digit = number2 % 10;
    result = digit + (result ? " " + result : "");
    number2 = Math.floor(number2 / 10);
}

console.log(`Розподіл числа ${number} по модулю (%): ${result}`);

console.log(`Інший варіант (toString + split + join): ${number.toString().split('').join(' ')}`);
