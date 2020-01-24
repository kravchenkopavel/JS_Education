/**
 * Created by pavlo.kravchenko on 1/24/2020.
 */
/*Оставить уникальные элементы массива
 важность: 4
 Пусть arr – массив строк.

 Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

 Например:

 function unique(arr) {
 /* ваш код
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O*/

function unique(arr) {
    let uniqArr = [];
    for (let i=0; i<arr.length; i++) {
        if (arr.indexOf(arr[i], i+1) == -1)
            uniqArr.push(arr[i]);
    }
        return uniqArr;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

unique(strings);

function uniqueHipster(arr) {
    return arr.filter((item, index, array) => array.indexOf(item, index + 1) == -1);
}
