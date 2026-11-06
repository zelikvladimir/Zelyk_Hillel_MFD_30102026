/**
 * 4.5
 * Умова: Дано деяке число. Ваше завдання – визначити, чи можна отримати це число,
 * піднявши число 3 до певного натурального ступеня. 
 * (Як приклад, числа 9 та 81 можна отримати цим способом, але 13 – ні.)
 */
const targetNumber = getRandomInt(0, 30);

if (!Number.isInteger(targetNumber) || targetNumber < 1) {
    console.log(`${targetNumber} не є натуральним числом`);
} else {
    let currentPower = 3;
    while (currentPower < targetNumber) {
        currentPower *= 3;
    }
    const isPowerOfThree = currentPower === targetNumber;
    const message = isPowerOfThree
        ? `${targetNumber} можна отримати піднесенням 3 до степеня`
        : `${targetNumber} не можна отримати піднесенням 3 до степеня`;
    console.log(message);
}
