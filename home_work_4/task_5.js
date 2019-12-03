/**
 * Created by pavlo.kravchenko on 11/19/2019.
 */

const fiksCurs = 2772.4 / 100;

let dollars = getNumberFromUser('Please, input sum in dollars');
let newCurs = getNumberFromUser('Please, input new kurs, UAH per 100 dollars');

function getNumberFromUser(text) {
    let input = prompt(text);
    while (input == null || input.startsWith(' ') || isNaN(+input)){
        alert(text);
        input = prompt(text);
    }
    return +input;
}

let shouldPayFiksKurs = dollars * fiksCurs;
let shouldPayNewKurs = dollars * newCurs / 100;

console.log("Difference between new kurs and fiks kurs: " + (shouldPayNewKurs - shouldPayFiksKurs));


