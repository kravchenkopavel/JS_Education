/**
 * Created by pavlo.kravchenko on 1/22/2020.
 */
/*�������� ������� filterRange(arr, a, b), ������� ��������� ������ arr, ���� � �� �������� ����� a � b � ����� ������ ���� ���������.

 ������� ������ ���������� ����� ������ � �� �������� ��������.

 ��������:

 let arr = [5, 3, 8, 1];

 let filtered = filterRange(arr, 1, 4);

 alert( filtered ); // 3,1 (����������� ��������)

 alert( arr ); // 5,3,8,1 (��� ���������)*/

function filterRange(arr, a, b) {
    return arr.filter((item) => (item >= a && item <= b));
}