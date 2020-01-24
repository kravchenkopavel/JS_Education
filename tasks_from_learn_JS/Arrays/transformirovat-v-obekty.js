/**
 * Created by pavlo.kravchenko on 1/24/2020.
 */
/*���������������� � �������
 ��������: 5
 � ��� ���� ������ �������� user, � � ������� �� �������� ���� name, surname � id.

 �������� ���, ������� ������� ��� ���� ������ �������� � ����������� id � fullName, ��� fullName � ������� �� name � surname.

 ��������:

 let vasya = { name: "����", surname: "������", id: 1 };
 let petya = { name: "����", surname: "������", id: 2 };
 let masha = { name: "����", surname: "�������", id: 3 };

 let users = [ vasya, petya, masha ];

 let usersMapped = /* ... ��� ��� ... */

/*
 usersMapped = [
 { fullName: "���� ������", id: 1 },
 { fullName: "���� ������", id: 2 },
 { fullName: "���� �������", id: 3 }
 ]
alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // ���� ������
����, �� ����� ���� ��� ����� ���������������� ���� ������ �������� � ������. ���������� ������������ =>. ��� ��������� ������.*/

let vasya = { name: "����", surname: "������", id: 1 };
let petya = { name: "����", surname: "������", id: 2 };
let masha = { name: "����", surname: "�������", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = [];

for (let i=0; i<users.length; i++) {
    let tmpObj = {
        fullName: users[i].name + " " + users[i].surname,
        id: users[i].id
    }
    usersMapped.push(tmpObj);
}

let usersMappedHipster = users.map(item => ({fullName: item.name + " " + item.surname, id: item.id}));