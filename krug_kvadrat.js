/**
 * Created by pavlo.kravchenko on 11/19/2019.
 */
let a, b = 0;
let x, y;
let R = 5;

x = prompt("Input x");
y = prompt("Input y");

if(x>=0 && x<=5 && y>=0 && y<=5 && (x*x + y*y) >= R*R) {
    alert("Yes");
}
else alert ("No");