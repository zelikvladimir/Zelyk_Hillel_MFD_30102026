/**
 * 2.1
 * Умова: За допомогою prompt запитати як звуть користувача. За допомогою alert вивести "Hello, John! How are you?", де John це те, що ввів користувач.
 */
let userName = prompt('Enter your name, please...');

if (!userName) {
    userName = "Anonymous";
}

alert(`Hello, ${userName}! How are you?`);
