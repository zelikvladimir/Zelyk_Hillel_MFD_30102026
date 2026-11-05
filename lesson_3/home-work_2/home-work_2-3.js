/** 2.3 */
function readValues() {
    const firstText = prompt('Введіть перше значення:');
    if (firstText === null) {
        return null;
    }

    const secondText = prompt('Введіть друге значення:');
    if (secondText === null) {
        return null;
    }

    return {
        firstValue: firstText.trim(),
        secondValue: secondText.trim()
    };
}

let values = readValues();

while (values !== null) {
    if (values.firstValue === '' || values.secondValue === '') {
        alert('Потрібно ввести обидва значення.');
    } else {
        break;
    }

    values = readValues();
}

if (values === null) {
    alert('Введення скасовано.');
} else {
    const areEqual = values.firstValue === values.secondValue;

    console.log(areEqual);
    alert(`Значення рівні: ${areEqual}`);
}
