/**
 * 3.3
 * Умова: Визначити, чи є число a дільником числа b? І навпаки. (Дати дві відповіді)
 */
const a = getRandomInt(1, 30);
const b = getRandomInt(1, 30);

const isADivisorOfB = b % a === 0;
const isBDivisorOfA = a % b === 0;

if (isADivisorOfB) {
    console.log(`Число ${a} є дільником числа ${b}`);
} else {
    console.log(`Число ${a} не є дільником числа ${b}`);
}

if (isBDivisorOfA) {
    console.log(`Число ${b} є дільником числа ${a}`);
} else {
    console.log(`Число ${b} не є дільником числа ${a}`);
}
