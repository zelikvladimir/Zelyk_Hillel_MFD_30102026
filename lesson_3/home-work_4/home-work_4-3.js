/**
 * 4.3
 * Умова: Дано ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
 */
const N = 50; // задане число
for (let i = 1; i <= 100; i++) {
    if (i * i <= N) {
        console.log(i);
    }
}

// Варіант 2: while
// let i = 1;
// while (i <= 100 && i * i <= N) {
//     console.log(i);
//     i++;
// }

// Варіант 3: for з break
// for (let i = 1; i <= 100; i++) {
//     if (i * i > N) break;
//     console.log(i);
// }
