/**
 * Created by pavlo.kravchenko on 11/19/2019.
 */

function getNumberFromUser() {
    let input = prompt('Please, input the number');
    while (input == null || input.startsWith(' ') || isNaN(+input)){
        alert('Please, input the number');
        input = prompt('Please, input the number');
    }
    return +input;
}

function getSignFromUser() {
    let sign = prompt('Please, input the sign: + or -');
        while (sign != '+' && sign != '-') {
            alert('Please, input the sign: + or -');
            sign = prompt('Please, input the sign: + or -');
        }
    return sign;
}

function getMax(a, b) {
    return a > b ? a : b;
}

function getMin(a, b) {
    return a < b ? a : b;
}



let firstNumber = getNumberFromUser();
let secondNumber = getNumberFromUser();
let thirdNumber = getNumberFromUser();
let sign = getSignFromUser();

if (sign === '+') {
    console.log('You entered \'+\', so the bigger number is: ' + getMax(getMax(firstNumber, secondNumber), thirdNumber));
}
else {
    console.log('You entered \'-\', so the smallest number is: ' + getMin(getMin(firstNumber, secondNumber), thirdNumber));
}



