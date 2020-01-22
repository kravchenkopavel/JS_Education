/**
 * Created by pavlo.kravchenko on 1/22/2020.
 */
/*�������� ������� camelize(str), ������� ����������� ������ ���� �my-short-string� � �myShortString�.

 �� ���� ������ ���������, � ��� ����� ����� ��� �������� ��������� �����.

 �������:

 camelize("background-color") == 'backgroundColor';
 camelize("list-style-image") == 'listStyleImage';
 camelize("-webkit-transition") == 'WebkitTransition';
 P.S. ���������: ����������� split, ����� ������� ������ �� ������ ��������, ����� ����������� �� ��� ����� � ������� join ��������� �������.*/

function camelize(str) {
    let tmpArr = str.split("-");
    for(let i = 1; i < tmpArr.length; i ++) {
        let tmpItem = tmpArr[i];
        tmpArr[i] = tmpItem.replace(tmpItem.charAt(0), tmpItem.charAt(0).toUpperCase());
    }
    return tmpArr.join("");
}

function camelizeHipster(str) {
    return str.split("-").map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join("");
}