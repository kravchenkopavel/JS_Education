/**
 * Created by pavlo.kravchenko on 11/19/2019.
 */

let inputNumber = prompt('Input number');
let numbers = getNumbers(inputNumber);

inputNumber = +inputNumber;

function checkIsNumber (number) {
    return !isNaN(number);
}

function getNumbers (number) {
    let numbers = {};

    for (let i = 1; i <= 100; i++) {
        if (i < Math.sqrt(number)){
            numbers[i] = i;
        }
        else {
            break;
        }
    }

    return numbers;
}

    if (checkIsNumber(inputNumber) && inputNumber > 0) {
        for (let key in numbers) {
            console.log(numbers[key]);
        }
    }
    else  {
        alert('Only positive numbers supports');
    }


