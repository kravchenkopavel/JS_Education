/**
 * Created by pavlo.kravchenko on 11/19/2019.
 */

let inputNumber = prompt('Input number');

inputNumber = +inputNumber;

function checkIsNumber (number) {
    return !isNaN(number);
}

function isSimple (number) {

    if ( number <1 )
        return false;

    if ( number <=3 )
        return true;

    for (let i = 2; i < number; i++) {
        if ((number % i) === 0){
            return false;
        }
    }
    return true;
}

    if (checkIsNumber(inputNumber)) {
        console.log(isSimple(inputNumber));
    }
    else  {
        alert('Only numbers supports');
    }


