/**
 * Created by pavlo.kravchenko on 1/31/2020.
 */
/*�������� �������� ����� "f.defer(ms)"
 ��������: 5
 �������� ���� �������� � �������� ����� defer(ms), ������� �������� ������� ����� ms �����������.

 ����� ����� ������ �������� ����� ���:

 function f() {
 alert("Hello!");
 }

 f.defer(1000); // ������� "Hello!" ����� 1 �������*/

Function.__proto__.defer = function(a) {
    setTimeout(this, a);
}

function f() {
    console.log("Hello!");
}

f.defer(1000);