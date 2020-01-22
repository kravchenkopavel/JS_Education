/**
 * Created by pavlo.kravchenko on 1/22/2020.
 */
/*Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b.
То есть, проверка имеет вид a ? arr[i] ? b.

 Функция должна изменять принимаемый массив и ничего не возвращать.

 Например:

 let arr = [5, 3, 8, 1];

 filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

 alert( arr ); // [3, 1]*/

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            --i;
        }
    }
}