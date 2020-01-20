/**
 * Created by pavlo.kravchenko on 1/20/2020.
 */

/*�������� ������� 1.2

 ���� �������:
 function f (a, b, c) {
 function sum (a, b) {
 retur a + b;
 }
 }
 ���������� � ��������� �������:
 2.1. ���� ��������� a � b �� ��������,  ��� ����� �� ��������� 2 � 3 ��������������.
 2.2. ���� �������� c ������� � �� �������� ��������, �� �� ����������� ����� ������ ������� sum.
 2.4. ������� f ������ ���������� ��������� ������� ��������� c, ���� �� ����, ���� ��������� ������� sum.
*/

let obj = {
    a: 5,
    b: 6,
    c: function() {return "I'm a function!";}
}

function f ({a = 2, b = 3, c = null}) {
    function sum () {
        return a + b;
    }

    let tmp = sum();

    if (c != null && c instanceof Function) {
        return c();
    }
    else {
        return tmp;
    }
}