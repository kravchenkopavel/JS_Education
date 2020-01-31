/**
 * Created by pavlo.kravchenko on 1/31/2020.
 */
/*Добавьте функциям декорирующий метод "defer()"
 важность: 4
 Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

 Например, должно работать так:

 function f(a, b) {
 alert( a + b );
 }

 f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
 Пожалуйста, заметьте, что аргументы должны корректно передаваться оригинальной функции.*/

Function.__proto__.defer = function(ms) {
    let tmp = this;
    return function(...args) {
        setTimeout(() => tmp.apply(this, args), ms);
    }
};

function f(a, b) {
    console.log( a + b );
}

f.defer(3000)(1, 2);