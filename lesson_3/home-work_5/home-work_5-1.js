/**
 * 5.1
 * Реалізуйте функцію generateKey(length, characters), що повертає рядок 
 * випадкових символів із набору characters довжиною length
 */
const getRandomChar = (str) => str[Math.floor(Math.random() * str.length)];

const validateLength = (length) => {
    if (!Number.isInteger(length) || length <= 0) {
        throw new Error('Argument "length" must be a positive integer');
    }
};

// Варіант 1: цикл for
const generateKey = (length, characters) => {
    validateLength(length);

    let result = '';

    for (let i = 0; i < length; i++) {
        result += getRandomChar(characters);
    }

    return result;
};

console.log('generateKey:', generateKey(17, getCharacters()));

// Варіант 2: Array.from
const generateKeyArrayFrom = (length, characters) => {
    validateLength(length);

    return Array.from({length}, () => getRandomChar(characters)).join('');
};

console.log('generateKeyArrayFrom:', generateKeyArrayFrom(17, getCharacters()));


// Варіант 3: Рекурсивний підхід
function generateKeyRecursive(length, characters) {
    validateLength(length);

    const buildKey = (len) => {
        if (len <= 0) return '';

        const randomChar = getRandomChar(characters);
    
        return randomChar + buildKey(len - 1);
    }

    return buildKey(length)
}

console.log('generateKeyRecursive:', generateKeyRecursive(17, getCharacters()));
