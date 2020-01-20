/**
 * Created by pavlo.kravchenko on 1/20/2020.
 */


/*
� ��� ���� ������:

 let user = {
 name: "John",
 years: 30
 };
 �������� ����������������� ������������, �������:

 �������� name �������� � ���������� name.
 �������� years �������� � ���������� age.
 �������� isAdmin �������� � ���������� isAdmin (false, ���� ��� ������ ��������)
 ������ ���������� ����� ������ ������������:

 let user = { name: "John", years: 30 };

 // ��� ��� ������ ���� � ����� �������:
 // ... = user

 alert( name ); // John
 alert( age ); // 30
 alert( isAdmin ); // false
*/

let user = {
    name: "John",
    years: 30
};

let {name, years: age, isAdmin = false} = user;