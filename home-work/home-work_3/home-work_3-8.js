/**
 * 3.8
 * Умова: Визначити, чи є задане шестизначне число дзеркальним? (123321, 147741)
 */
// Варіант 1: цифри записуються в шість констант, пари порівнюються напряму.
let number = 123321;
const digit1 = Math.floor(number / 100000);
const digit2 = Math.floor(number / 10000) % 10;
const digit3 = Math.floor(number / 1000) % 10;
const digit4 = Math.floor(number / 100) % 10;
const digit5 = Math.floor(number / 10) % 10;
const digit6 = number % 10;

const isMirror = digit1 === digit6 && digit2 === digit5 && digit3 === digit4;

console.log(`Варіант 1, число: ${number}`);

if (isMirror) {
    console.log('Число дзеркальне: так');
} else {
    console.log('Число дзеркальне: ні');
}

// Варіант 2: число перетворюється в рядок, символи порівнюються через for.
number = getRandomInt(100000, 999999);
const text = String(number);

let isMirrorText = true;
for (let i = 0; i < text.length / 2; i++) {
    if (text[i] !== text[text.length - 1 - i]) {
        isMirrorText = false;
    }
}

console.log(`Варіант 2, число: ${text}`);

if (isMirrorText) {
    console.log('Число дзеркальне: так');
} else {
    console.log('Число дзеркальне: ні');
}
