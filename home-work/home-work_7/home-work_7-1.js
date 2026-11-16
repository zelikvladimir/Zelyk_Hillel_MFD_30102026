/**
 * ДЗ 7. Функція removeElementFromArray
 *
 * Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
 */

const ARRAY = [1, 2, 3, 4, 5, 6, 7];
const ARRAY_DUPLICATES = [1, 5, 2, 5, 3, 5, 4];

const printResult = (arrayBefore, arrayAfter) => {
    console.log('Array Before:', arrayBefore);
    console.log('Array After:', arrayAfter);
    console.log('=================================');
};

// Варіант 1: видаляє перший знайдений елемент (змінює масив на місці).
const removeElement = (array, item) => {
    const index = array.indexOf(item);

    if (index !== -1) {
        array.splice(index, 1);
    }

    return array;
};

printResult(ARRAY, removeElement([...ARRAY], 5));

// Варіант 2: видаляє всі входження item з масиву (змінює масив на місці)
const removeAllElementsLoop = (array, item) => {
    // Йдемо з кінця, щоб видалення не зсувало індекси ще не перевірених елементів.
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === item) {
            array.splice(i, 1);
        }
    }

    return array;
};

printResult(ARRAY_DUPLICATES, removeAllElementsLoop([...ARRAY_DUPLICATES], 5));


// Варіант 3: видаляє всі входження item з масиву (повертає новий масив, вхідний не змінює)
const removeAllElements = (array, item) => array.filter((element) => element !== item);

printResult(ARRAY_DUPLICATES, removeAllElements([...ARRAY_DUPLICATES], 5));
