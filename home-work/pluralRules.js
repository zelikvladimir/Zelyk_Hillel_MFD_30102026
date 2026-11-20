/**
 * Підбір форми слова залежно від числа за правилами множини української мови.
 * Словники форм слів зберігаються в `pluralForms`, функції підбору додаються для кожного слова окремо.
 *
 * @file
 * @module pluralRules
 */

/**
 * Правила множини для української мови.
 * Визначає граматичну категорію числа: 'one', 'few', 'many' або 'other'.
 *
 * @type {Intl.PluralRules}
 */
const pluralRules = new Intl.PluralRules('uk-UA');

/**
 * Словник форм слів за категорією множини.
 *
 * @typedef {Object} PluralForms
 * @property {string} one   Форма для 1, 21, 31, … («рік»).
 * @property {string} few   Форма для 2–4, 22–24, … («роки»).
 * @property {string} many  Форма для 0, 5–20, 25–30, … («років»).
 * @property {string} other Форма для дробових чисел («років»).
 */

/**
 * Словник форм слів, згрупований за назвою слова.
 *
 * @type {{ year: PluralForms }}
 */
const pluralForms = {
    year: {
        one: 'рік',
        few: 'роки',
        many: 'років',
        other: 'років',
    }
};

/**
 * Повертає форму слова для заданого числа.
 *
 * @param {PluralForms} forms Словник форм слова за категорією множини.
 * @param {number} n Число, для якого потрібна форма слова.
 * @returns {string} Форма слова з відповідним закінченням.
 *
 * @example
 * getWordForm(pluralForms.year, 3); // 'роки'
 */
const getWordForm = (forms, n) => forms[pluralRules.select(n)];