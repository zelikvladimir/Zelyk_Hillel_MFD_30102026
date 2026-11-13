/**
 * 6.1 Аналізуємо масив об’єктів
 *
 * Дано масив об’єктів. Вивести масив телефонних номерів користувачів в яких
 * баланс більше ніж 2000 доларів. І знайти суму всіх балансів користувачів
 */
const users = getUsers();

const MIN_BALANCE = 2000;

// Перетворює рядок "$2,226.60" на число 2226.6.
const parseBalance = (balance) => Number(balance.replace(/[$,]/g, ''));

// Підсумовує в центах, щоб уникнути похибки дробових чисел.
const toCents = (amount) => Math.round(amount * 100);

// Виводить у Console телефони і суму балансів
const printResult = (phones, totalBalance) => {
    console.log('Телефони (баланс > $2000):', phones);
    console.log('Сума всіх балансів:', totalBalance);
    console.log('=================================');
};

// Варіант 1: цикл for...of
const richUsersPhonesLoop = [];
let totalCentsLoop = 0;

for (const user of users) {
    const balance = parseBalance(user.balance);

    if (balance > MIN_BALANCE) {
        richUsersPhonesLoop.push(user.phone);
    }

    totalCentsLoop += toCents(balance);
}

const totalBalanceLoop = (totalCentsLoop / 100).toFixed(2);

console.log('=== Варіант 1: цикл for...of');
printResult(richUsersPhonesLoop, totalBalanceLoop);


// Варіант 2: filter, map, reduce
const richUsersPhones = users
    .filter((user) => parseBalance(user.balance) > MIN_BALANCE)
    .map((user) => user.phone);

const totalBalanceReduce = users
    .reduce((sum, user) => sum + toCents(parseBalance(user.balance)), 0) / 100;

console.log('=== Варіант 2: filter, map, reduce');
printResult(richUsersPhones, totalBalanceReduce.toFixed(2));


// Варіант 3: парсинг у цілі центи з перевіркою формату
const MIN_BALANCE_CENTS = MIN_BALANCE * 100;
const BALANCE_PATTERN = /^\$(\d{1,3}(?:,\d{3})*)\.(\d{2})$/;

// Перетворює рядок "$2,226.60" на цілі центи 222660 без дробових чисел.
const parseBalanceToCents = (balance) => {
    const match = BALANCE_PATTERN.exec(balance);

    if (!match) {
        throw new Error(`Invalid balance format: "${balance}"`);
    }

    const [, dollars, cents] = match;

    return Number(dollars.replaceAll(',', '')) * 100 + Number(cents);
};

// Форматує суму в центах як грошове значення.
// currency — код ISO 4217, наприклад 'USD' або 'EUR'.
// locale — формат запису, наприклад 'en-US' ($15,803.57) або 'uk-UA' (15 803,57 USD).
const formatCents = (cents, currency, locale = 'en-US') => new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
}).format(cents / 100);

const richUsersPhonesStrict = [];
let totalCentsStrict = 0;

for (const user of users) {
    const balanceCents = parseBalanceToCents(user.balance);

    if (balanceCents > MIN_BALANCE_CENTS) {
        richUsersPhonesStrict.push(user.phone);
    }

    totalCentsStrict += balanceCents;
}

const totalBalanceStrict = formatCents(totalCentsStrict, 'USD');

console.log('=== Варіант 3: парсинг у цілі центи з перевіркою формату');
printResult(richUsersPhonesStrict, totalBalanceStrict);






