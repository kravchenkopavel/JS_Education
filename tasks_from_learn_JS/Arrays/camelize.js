/**
 * Created by pavlo.kravchenko on 1/22/2020.
 */
/*Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

 То есть дефисы удаляются, а все слова после них получают заглавную букву.

 Примеры:

 camelize("background-color") == 'backgroundColor';
 camelize("list-style-image") == 'listStyleImage';
 camelize("-webkit-transition") == 'WebkitTransition';
 P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.*/

function camelize(str) {
    let tmpArr = str.split("-");
    for(let i = 1; i < tmpArr.length; i ++) {
        let tmpItem = tmpArr[i];
        tmpArr[i] = tmpItem.replace(tmpItem.charAt(0), tmpItem.charAt(0).toUpperCase());
    }
    return tmpArr.join("");
}

function camelizeHipster(str) {
    return str.split("-").map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join("");
}