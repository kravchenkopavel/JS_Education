/**
 * Created by pavlo.kravchenko on 1/20/2020.
 */

/*Домашнее Задание 1.2

 Дана функция:
 function f (a, b, c) {
 function sum (a, b) {
 retur a + b;
 }
 }
 Перепишите её следующим образом:
 2.1. Если аргументы a и b не переданы,  они равны по умолчанию 2 и 3 соответственно.
 2.2. Если аргумент c передан и он является функцией, то он выполняется после вызова функции sum.
 2.4. Функция f должна возвращать результат функции аргумента c, если он есть, либо результат функции sum.
*/

let obj = {
    a: 5,
    b: 6,
    c: function() {return "I'm a function!";}
}

function f ({a = 2, b = 3, c = null}) {
    function sum () {
        return a + b;
    }

    let tmp = sum();

    if (c != null && c instanceof Function) {
        return c();
    }
    else {
        return tmp;
    }
}
