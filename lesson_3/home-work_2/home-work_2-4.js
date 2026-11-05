/**
 * 2.4
 * Умова: Визначити середнє арифметичне трьох чисел.
 */
const numbers = [getRandomInt(1, 100), getRandomInt(1, 100), getRandomInt(1, 100)];
const average = (numbers[0] + numbers[1] + numbers[2]) / 3;

console.log(`Випадкові числа: ${numbers.join(', ')}`);
console.log(`Середнє арифметичне: ${average}`);
