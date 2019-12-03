/**
 * Created by pavlo.kravchenko on 11/19/2019.
 */

let fruits = {};
let i = 0;
let inputFruit = prompt('Please, enter fruit');

while(inputFruit != null) {
    fruits[i] = inputFruit;
    i++;
    inputFruit = prompt('Please, enter another one, to quite - press ESC or Cancel');
}

function isObjEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

if (isObjEmpty(fruits)) {
    console.log('No fruits');
}
else{
    console.log('Your fruits: \n');
    for(let key in fruits) {
        console.log(fruits[key] + '\n');
    }
}




