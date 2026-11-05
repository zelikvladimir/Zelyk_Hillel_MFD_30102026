/**
 * 3.2
 * Умова: Відомі дві відстані. Одне у кілометрах, інше – у футах (1 фут = 0,305м). Яка відстань менша?
 */
const kilometers = getRandomInt(1, 25);
const feet = getRandomInt(1000, 99999);

const kilometersInMeters = kilometers * 1000;
const feetInMeters = feet * 0.305;

if (kilometersInMeters < feetInMeters) {
    console.log(`${kilometers} km vs ${feet} feet = Менша відстань: ${kilometers} km`);
} else if (kilometersInMeters > feetInMeters) {
    console.log(`${kilometers} km vs ${feet} feet = Менша відстань: ${feet} feet`);
} else {
    console.log(`${kilometers} km vs ${feet} feet = Відстані рівні`);
}
