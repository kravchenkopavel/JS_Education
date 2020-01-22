/**
 * Created by pavlo.kravchenko on 1/22/2020.
 */
/*������� ����������� �����������
 ��������: 5
 �������� ������� ����������� Calculator, ������� ������ ������������ ������� ������������.

 ������� ������� �� ���� ������.

 ��-������, ���������� ����� calculate(str), ������� ��������� ������ ���� "1 + 2" � ������� ������ �������� ����λ (��������� ���������) � ���������� ���������.
 ����� ������ �������� ���� + � ����� -.

 ������ �������������:

 let calc = new Calculator;

 alert( calc.calculate("3 + 7") ); // 10
 ����� �������� ����� addMethod(name, func), ������� ��������� � ����������� ����� ��������. �� ��������� �������� name � ������� � ����� ����������� func(a,b), ������� ��������� ���.

 ��������, ������� ������� ��������� *, ������� / � ���������� � ������� **:

 let powerCalc = new Calculator;
 powerCalc.addMethod("*", (a, b) => a * b);
 powerCalc.addMethod("/", (a, b) => a / b);
 powerCalc.addMethod("**", (a, b) => a ** b);

 let result = powerCalc.calculate("2 ** 3");
 alert( result ); // 8
 ��� ���� ������ �� ����� ������ ��� ������� ���������.
 ����� � �������� ��������� ����� ����� ��������.
 �� ������ ����� �������� ��������� ������.*/

function Calculator() {

    this.methods = {
        "+" : (a, b) => a + b
    };

    this.calculate = function(str) {

        if (typeof str !== "string") {
            console.log("Use string as a parameter!");
            return ;
        }

        let tmpArr = str.split(" ");
        let a = +tmpArr[0];
        let op = tmpArr[1];
        let b = +tmpArr[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    };

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    }
}