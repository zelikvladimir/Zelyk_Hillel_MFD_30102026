/**
 * 3.2
 * Умова: Відомі дві відстані. Одне у кілометрах, інше – у футах (1 фут = 0,305м). Яка відстань менша?
 */
const km = getRandomInt(1, 25);
const feet = getRandomInt(1000, 99999);

const kmInMeters = km * 1000;
const feetInMeters = feet * 0.305;

if (kmInMeters < feetInMeters) {
    console.log(`${km} km vs ${feet} feet = Менша відстань: ${km} km`);
} else if (kmInMeters > feetInMeters) {
    console.log(`${km} km vs ${feet} feet = Менша відстань: ${feet} feet`);
} else {
    console.log(`${km} km vs ${feet} feet = Відстані рівні`);
}
