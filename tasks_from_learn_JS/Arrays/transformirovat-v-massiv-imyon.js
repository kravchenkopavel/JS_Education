/**
 * Created by pavlo.kravchenko on 1/24/2020.
 */
/*���������������� � ������ ���
 ��������: 5
 � ��� ���� ������ �������� user, � � ������ �� ��� ���� user.name. �������� ���, ������� ����������� �� � ������ ���.

 ��������:

 let vasya = { name: "����", age: 25 };
 let petya = { name: "����", age: 30 };
 let masha = { name: "����", age: 28 };

 let users = [ vasya, petya, masha ];

 let names = /* ... ��� ��� */

alert( names ); // ����, ����, ����*/

let vasya = { name: "����", age: 25 };
let petya = { name: "����", age: 30 };
let masha = { name: "����", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map((item) => item.name);

alert( names ); // ����, ����, ����