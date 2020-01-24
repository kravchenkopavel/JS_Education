/**
 * Created by pavlo.kravchenko on 1/24/2020.
 */
/*����������� �� ����
 ��������: 5
 � ��� ���� ������ ��������, ������� ����� �������������:

 let users = [
 { name: "John", age: 20, surname: "Johnson" },
 { name: "Pete", age: 18, surname: "Peterson" },
 { name: "Ann", age: 19, surname: "Hathaway" }
 ];
 ������� ������ ��� �� �����:

 // �� ����� (Ann, John, Pete)
 users.sort((a, b) => a.name > b.name ? 1 : -1);

 // �� �������� (Pete, Ann, John)
 users.sort((a, b) => a.age > b.age ? 1 : -1);
 ����� �� �� ������� ��� ������, ������, ��� �����?

 users.sort(byField('name'));
 users.sort(byField('age'));
 �� ����, ����� ������ �������, �� ������ ������ byField(fieldName).

 �������� ������� byField, ������� ����� ���� ������������ ��� �����.*/

function byField(field) {
    return function(a, b) {
        return a[field] > b[field] ? 1 : -1;
    }
}