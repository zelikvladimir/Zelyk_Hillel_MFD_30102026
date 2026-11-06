/**
 * 4.1
 * Умова: Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5...).
 */
// Варіант 1: конкатенація рядка
let result = "";
for (let i = 20; i <= 30; i += 0.5) {
    result += i + " ";
}
console.log(result.trim());

// Варіант 2: методи масивів
const numbers = [];
for (let i = 20; i <= 30; i += 0.5) {
    numbers.push(i);
}
console.log(numbers.join(" "));
