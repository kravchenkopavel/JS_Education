/**
 * Created by Pavel on 03.11.2019.
 */

'use strict';

//столько фунтов стоит одна грн
let currency = 2.88/100;

//столько кг весит один фунт
let funt = 1/2.20462;

let mass = prompt("Input your luggage's mass");

mass = +mass;

if (isNaN(mass)) {
    alert("Only numbers support, press F5 to try again");
}
else {
    mass = mass * funt;
    if (mass == 0) {
        console.log("You don't have luggage, no pay needed");
    }
    if (mass > 0 && mass < 5) {
        console.log("You have to pay " + mass*3*currency + " pounds");
    }
    if (mass >= 5 && mass < 10) {
        console.log("You have to pay " + mass*5*currency + " pounds");
    }
    if (mass >= 10 && mass < 15) {
        console.log("You have to pay " + mass*10*currency + " pounds");
    }
    if (mass < 0 || mass > 15){
        console.log("Sorry something gone wrong");
    }
}



