/**
 * Created by pavlo.kravchenko on 1/20/2020.
 */


/*� ��� ���� ������ salaries � ����������:

 let salaries = {
 "John": 100,
 "Pete": 300,
 "Mary": 250
 };
 �������� ������� topSalary(salaries), ������� ���������� ��� ������ ������������������� ����������.

 ���� ������ salaries ������, �� ����� ������� null.
 ���� ��������� ������������������ �����������, ����� ������� ������ �� ���.
 P.S. ����������� Object.entries � ������������������, ����� ��������� ���� ����/��������.*/

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let topSalary = null;
    let topWorker = null;
    for (let [key, value] of Object.entries(salaries)) {
        if (value > topSalary) {
            topSalary = value;
            topWorker = key;
        }
    }
    return topWorker;
}