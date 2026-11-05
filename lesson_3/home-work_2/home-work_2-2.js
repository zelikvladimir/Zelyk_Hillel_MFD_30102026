/**
 * 2.2
 * Умова: Створити скрипт для складання, віднімання, множення та поділу двох чисел та виведення результатів.
 */
const allowedOperators = ['+', '-', '*', '/'];

function parseNumber(text) {
    if (text === null || text.trim() === '') {
        return NaN;
    }

    return Number(text);
}

function readInputs() {
    const firstText = prompt('Введіть перше число:');
    if (firstText === null) {
        return null;
    }

    const secondText = prompt('Введіть друге число:');
    if (secondText === null) {
        return null;
    }

    const operatorText = prompt('Введіть операцію: + (додавання), - (віднімання), * (множення), / (ділення)');
    if (operatorText === null) {
        return null;
    }

    return {
        firstNumber: parseNumber(firstText),
        secondNumber: parseNumber(secondText),
        operator: operatorText.trim()
    };
}

let inputs = readInputs();

while (inputs !== null) {
    const { firstNumber, secondNumber, operator } = inputs;

    if (!Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)) {
        alert('Потрібно ввести два числа.');
    } else if (!allowedOperators.includes(operator)) {
        alert('Невідома операція. Введіть +, -, * або /.');
    } else if (operator === '/' && secondNumber === 0) {
        alert('Ділення на нуль неможливе. Введіть інші числа.');
    } else {
        break;
    }

    inputs = readInputs();
}

if (inputs === null) {
    alert('Введення скасовано.');
} else {
    const { firstNumber, secondNumber, operator } = inputs;
    let result;

    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
    }

    console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
    alert(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
}
