/**
 * Created by pavlo.kravchenko on 1/24/2020.
 */
/*�������� ���������� �������� �������
 ��������: 4
 ����� arr � ������ �����.

 �������� ������� unique(arr), ������� ���������� ������, ���������� ������ ���������� �������� arr.

 ��������:

 function unique(arr) {
 /* ��� ���
}

let strings = ["������", "������", "����", "����",
    "����", "����", "������", "������", ":-O"
];

alert( unique(strings) ); // ������, ����, :-O*/

function unique(arr) {
    let uniqArr = [];
    for (let i=0; i<arr.length; i++) {
        if (arr.indexOf(arr[i], i+1) == -1)
            uniqArr.push(arr[i]);
    }
        return uniqArr;
}

let strings = ["������", "������", "����", "����",
    "����", "����", "������", "������", ":-O"
];

unique(strings);

function uniqueHipster(arr) {
    return arr.filter((item, index, array) => array.indexOf(item, index + 1) == -1);
}
