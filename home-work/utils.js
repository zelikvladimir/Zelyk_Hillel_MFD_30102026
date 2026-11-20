/**
 * Спільні утиліти для домашніх завдань.
 *
 * @file
 * @module utils
 */

/**
 * Повертає випадкове ціле число від min до max включно.
 *
 * @param {number} min Найменше можливе значення (включно).
 * @param {number} max Найбільше можливе значення (включно).
 * @returns {number} Ціле число в діапазоні [min, max].
 *
 * @example
 * getRandomInt(1, 6); // 1, 2, 3, 4, 5 або 6
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Запитує рядок у користувача через prompt. Повторює запит, поки введено порожній рядок
 * (після видалення пробілів на краях).
 *
 * @param {string} promptText Текст, який показується в діалозі prompt.
 * @returns {string|null} Введений рядок без крайніх пробілів або null, якщо користувач натиснув «Скасувати».
 */
function getValidString(promptText) {
    let value;

    do {
        value = prompt(promptText);
        if (value === null) return null;

        value = value.trim();
        if (!value) {
            alert("Рядок не може бути порожнім! Спробуйте ще раз.");
        }
    } while (!value);

    return value;
}

/**
 * Запитує число у користувача через prompt. Повторює запит, поки введене значення
 * не є числом або не проходить перевірку діапазону.
 *
 * Перевірка діапазону: значення має бути більше за `min` і не більше за `max`.
 * Тобто `min` сам по собі не приймається, а `max` приймається.
 *
 * @param {string} promptText Текст, який показується в діалозі prompt.
 * @param {number} [min=0] Нижня межа. Значення строго більше за неї.
 * @param {number} [max=Infinity] Верхня межа включно.
 * @returns {number|null} Введене число або null, якщо користувач натиснув «Скасувати».
 */
function getValidNumber(promptText, min = 0, max = Infinity) {
    let value;
    let num;

    do {
        value = prompt(promptText);
        if (value === null) return null;

        num = Number(value.trim());
        if (isNaN(num) || !value.trim() || num <= min || num > max) {
            alert(`Введіть коректне число ( від ${min} до ${max})!`);
            num = NaN;
        }
    } while (isNaN(num));

    return num;
}

/**
 * Копіює виводи console.log у переданий елемент сторінки. Оригінальний console.log
 * також працює, тож повідомлення видно і в консолі.
 * Переноси рядків (\n) зберігаються, тому елемент має відображати текст без згортання пробілів, наприклад <pre>.
 *
 * @param {HTMLElement} element Елемент, у який додаються повідомлення.
 * @returns {void}
 */
function mirrorConsoleTo(element) {
    const originalLog = console.log.bind(console);

    console.log = (...args) => {
        originalLog(...args);
        element.textContent += args.map(String).join(' ') + '\n';
    };
}
