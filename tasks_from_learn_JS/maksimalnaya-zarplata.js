/**
 * Created by pavlo.kravchenko on 1/20/2020.
 */


/*У нас есть объект salaries с зарплатами:

 let salaries = {
 "John": 100,
 "Pete": 300,
 "Mary": 250
 };
 Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

 Если объект salaries пустой, то нужно вернуть null.
 Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
 P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.*/

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let topSalary = null;
    let topWorker = null;
    for (let [key, value] of Object.entries(salaries)) {
        if (value > topSalary) {
            topSalary = value;
            topWorker = key;
        }
    }
    return topWorker;
}