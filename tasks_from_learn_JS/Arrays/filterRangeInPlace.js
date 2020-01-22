/**
 * Created by pavlo.kravchenko on 1/22/2020.
 */
/*�������� ������� filterRangeInPlace(arr, a, b), ������� ��������� ������ arr � ������� �� ���� ��� �������� ����� ���, ������� ��������� ����� a � b.
�� ����, �������� ����� ��� a ? arr[i] ? b.

 ������� ������ �������� ����������� ������ � ������ �� ����������.

 ��������:

 let arr = [5, 3, 8, 1];

 filterRangeInPlace(arr, 1, 4); // ������� ����� ��� ��������� 1..4

 alert( arr ); // [3, 1]*/

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            --i;
        }
    }
}