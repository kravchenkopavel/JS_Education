/**
 * Created by pavlo.kravchenko on 1/31/2020.
 */
/*Добавить функциям метод "f.defer(ms)"
 важность: 5
 Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.

 После этого должен работать такой код:

 function f() {
 alert("Hello!");
 }

 f.defer(1000); // выведет "Hello!" через 1 секунду*/

Function.__proto__.defer = function(a) {
    setTimeout(this, a);
}

function f() {
    console.log("Hello!");
}

f.defer(1000);