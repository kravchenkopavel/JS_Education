/**
 * Created by pavlo.kravchenko on 1/24/2020.
 */
/*������������� ������������� �� ��������
 ��������: 5
 �������� ������� sortByAge(users), ������� ��������� ������ �������� �� ��������� age � ��������� �� �� ����.

 ��������:

 let vasya = { name: "����", age: 25 };
 let petya = { name: "����", age: 30 };
 let masha = { name: "����", age: 28 };

 let arr = [ vasya, petya, masha ];

 sortByAge(arr);

 // ������: [vasya, masha, petya]
 alert(arr[0].name); // ����
 alert(arr[1].name); // ����
 alert(arr[2].name); // ����*/


let vasya = { name: "����", age: 25 };
let petya = { name: "����", age: 30 };
let masha = { name: "����", age: 28 };

let arr = [ vasya, petya, masha ];

function sortByAge(users) {
    users.sort((a, b) => a.age - b.age);
}

sortByAge(arr);