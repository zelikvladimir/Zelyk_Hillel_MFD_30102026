/**
 * 3.6
 * Умова: Дано тризначне число.
 * - Визначити, чи є парною сума його цифр.
 * - Визначити, чи кратна сума цифр п'яти.
 * - Визначити, чи є добуток його цифр більше 100.
 */
const number = getRandomInt(100, 999);
const hundreds = Math.floor(number / 100);
const tens = Math.floor(number / 10) % 10;
const units = number % 10;

const digitsSum = hundreds + tens + units;
const digitsProduct = hundreds * tens * units;

console.log(`Число: ${number}, цифри: ${hundreds}, ${tens}, ${units}`);

if (digitsSum % 2 === 0) {
    console.log(`Сума цифр ${digitsSum} парна`);
} else {
    console.log(`Сума цифр ${digitsSum} непарна`);
}

if (digitsSum % 5 === 0) {
    console.log(`Сума цифр ${digitsSum} кратна 5`);
} else {
    console.log(`Сума цифр ${digitsSum} не кратна 5`);
}

if (digitsProduct > 100) {
    console.log(`Добуток цифр ${digitsProduct} більше 100`);
} else {
    console.log(`Добуток цифр ${digitsProduct} не більше 100`);
}
