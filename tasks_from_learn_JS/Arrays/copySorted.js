/**
 * Created by pavlo.kravchenko on 1/22/2020.
 */
/*����������� � ������������� ������
 ��������: 5
 � ��� ���� ������ ����� arr. ����� �������� ��������������� �����, �� �������� arr �����������.

 �������� ������� copySorted(arr), ������� ����� ���������� ����� �����.

 let arr = ["HTML", "JavaScript", "CSS"];

 let sorted = copySorted(arr);

 alert( sorted ); // CSS, HTML, JavaScript
 alert( arr ); // HTML, JavaScript, CSS (��� ���������)*/

function copySorted(arr) {
    return arr.slice().sort();
}