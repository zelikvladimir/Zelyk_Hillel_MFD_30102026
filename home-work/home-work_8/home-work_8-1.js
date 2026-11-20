/**
 * ДЗ 8. Сутності людини та автомобіля
 *
 * Створити сутність людини:
 *  - ім'я
 *  - вік
 *  - Метод виведення даних

 * Створити сутність автомобіля:
 *  - Характеристики автомобіля окремими властивостями
 * 
 * Методи:
 *  - Виведення на екран даних про цей автомобіль
 * 
 * Присвоєння цього автомобіля власнику (записати в автомобіль об'єкт власника)
 * Усі дані про людину та про автомобіль отримувати від користувача. Реалізувати необхідні перевірки на коректність введення (порожні поля, вік >18 в людини і т.д. у разі потреби).
 * 
 * Максимально використовувати функції
 * 
 * @file
 * Залежить від `pluralForms` і `getWordForm` з `home-work/pluralRules.js`
 * і від `getValidString` і `getValidNumber` з `home-work/utils.js`. Ці файли мають бути підключені раніше.
 */

'use strict';

/**
 * Людина з ім'ям і віком.
 */
class Person {
    /**
     * @param {string} name Ім'я людини.
     * @param {number} age Вік людини.
     */
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    /**
     * Виводить в Console ім'я та вік людини з правильною формою слова «рік».
     * Форму слова бере з `getWordForm(pluralForms.year, age)` (файл pluralRules.js).
     *
     * @returns {void}
     */
    showInfo() {
        const pluralWord = getWordForm(pluralForms.year, this.age);
        console.log(`Власник: ${this.name}, Вік: ${this.age} ${pluralWord}`);
    }
}

/**
 * Автомобіль з характеристиками та власником.
 */
class Car {
    /**
     * @param {string} brand Марка автомобіля.
     * @param {string} model Модель автомобіля.
     * @param {number} year Рік випуску.
     * @param {string} licensePlate Номерний знак.
     */
    constructor(brand, model, year, licensePlate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
        this.owner = null;
    }

    /**
     * Призначає власника автомобіля.
     *
     * @param {Person} person Власник автомобіля.
     * @returns {void}
     * @throws {Error} Якщо `person` не є екземпляром класу Person.
     */
    assidnOwner(person) {
        if (person instanceof Person) {
            this.owner = person;
        } else {
            throw new Error('Власник має бути екземпляром класу Person');
        }
    }

    /**
     * Виводить в Console дані автомобіля та дані власника, якщо він призначений.
     *
     * @returns {void}
     */
    showInfo() {
        console.log(`Марка: ${this.brand}, \nМодель: ${this.model}, \nРік: ${this.year}, \nНомерний знак: ${this.licensePlate}`);

        if (this.owner) {
            this.owner.showInfo();
        } else {
            console.log('Власник: не призначено');
        }
    }
}

/**
 * Запитує у користувача ім'я та вік власника і створює Person.
 * Вік має бути більше 18 і не більше 107.
 *
 * @returns {Person|null} Новий власник або null, якщо користувач скасував введення.
 */
function createPersonFromInput() {
    const name = getValidString('Введіть ім`я власника:');
    if (!name) return null;

    const age = getValidNumber('Введіть вік власника:', 18, 107);
    if (!age) return null;
    
    return new Person(name, age);
}

/**
 * Запитує у користувача дані автомобіля і створює Car.
 * Рік випуску має бути більше 1886 і не більше поточного року.
 *
 * @returns {Car|null} Новий автомобіль або null, якщо користувач скасував введення.
 */
function createCarFromInput() {
    const brand = getValidString('Введіть марку автомобіля:');
    if (!brand) return null;
    
    const model = getValidString('Введіть модель автомобіля:');
    if (!model) return null;

    const year = getValidNumber('Введіть рік випуску:', 1900, new Date().getFullYear());
    if (!year) return null;

    const licensePlate = getValidString('Введіть державний номер автомобіля:');
    if (!licensePlate) return null;

    return new Car(brand, model, year, licensePlate);
}

/**
 * Точка входу: запитує власника і автомобіль, призначає власника та виводить дані.
 * Якщо введення скасовано на будь-якому кроці, виконання зупиняється без виводу.
 *
 * @returns {void}
 */
function initApp() {
    const person = createPersonFromInput();
    if (!person) {
        console.log('Створення власника скасовано.');
        return;
    }

    const car = createCarFromInput();
    if (!car) {
        console.log('Створення автомобіля скасовано.');
        return;
    }

    car.assidnOwner(person);
    car.showInfo();
}

initApp();

