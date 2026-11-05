/**
 * 2.4
 * Умова: Визначити середнє арифметичне трьох чисел.
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numbers = [getRandomInt(1, 100), getRandomInt(1, 100), getRandomInt(1, 100)];
const average = (numbers[0] + numbers[1] + numbers[2]) / 3;

console.log(`Випадкові числа: ${numbers.join(', ')}`);
console.log(`Середнє арифметичне: ${average}`);
