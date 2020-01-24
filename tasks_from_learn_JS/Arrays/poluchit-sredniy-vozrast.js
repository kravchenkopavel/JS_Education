/**
 * Created by pavlo.kravchenko on 1/24/2020.
 */
/*�������� ������� �������
 ��������: 4
 �������� ������� getAverageAge(users), ������� ��������� ������ �������� �� ��������� age � ���������� ������� �������.

 ������� ���������� �������� ��������������� ��������: (age1 + age2 + ... + ageN) / N.

 ��������:

 let vasya = { name: "����", age: 25 };
 let petya = { name: "����", age: 30 };
 let masha = { name: "����", age: 29 };

 let arr = [ vasya, petya, masha ];

 alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28*/

let vasya = { name: "����", age: 25 };
let petya = { name: "����", age: 30 };
let masha = { name: "����", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(users) {
    return arr.reduce((tmp, item) => tmp + item.age, 0)/users.length;
}
