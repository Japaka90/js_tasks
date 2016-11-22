//Задание 1
//Даны два ненулевых числа. Найти их сумму, разность, произведение и частное.

var a = parseInt(prompt("Введите первое число"));
var b = parseInt(prompt("Введите второе число"));

console.log("Сумма " + a + " и " + b + " равна: " + (a + b));
console.log("Разность " + a + " и " + b + " равна: " + (a - b));
console.log("Произведение " + a + " и " + b + " равно: " + (a * b));
console.log("Частное " + a + " и " + b + " равно : " + (a / b));


//Задание 2
//Даны два числа. Найти среднее арифметическое их квадратов и среднее арифметическое их модулей.(Math.pow Math.abs)

var c = parseInt(prompt("Введите первое число"));
var d = parseInt(prompt("Введите второе число"));

var x = (Math.pow(c, 2) + Math.pow(d, 2)) / 2;
var y = (Math.abs(c) + Math.abs(d)) / 2;

console.log("Среднее арифметическое квадратов " + c + " и " + d + "равно: " + x);
console.log("Среднее арифметическое модулей " + c + " и " + d + " равно: " + y);


//Задание 3
/* Скорость лодки в стоячей воде V км/ч, скорость течения реки U км/ч (U < V). Время движения лодки по озеру T1 ч, а по реке (против течения) — T2 ч. Определить путь S, пройденный лодкой. */

var V = 15;
var U = 5;
var T1 = 3;
var T2 = 4;

var S1 = V * T1;
var S2 = (V - U) * T2;

console.log("Лодка проплыла по озеру " + S1 + " км");
console.log("Лодка проплыла по реке " + S2 + " км");


//Задание 4
/*Даны координаты (как целые от 1 до 8) двух различных полей шахматной доски. Если конь за один ход может перейти с одного поля на другое, вывести логическое значение True, в противном случае вывести значение False.*/

var v = parseInt(prompt("Введите номер клетки по вертикали, где стоит конь"));
var g = parseInt(prompt("Введите номер клетки по горизонтали, где стоит конь"));

var v1 = parseInt(prompt("Введите номер клетки по вертикали, куда вы хотите пойти"));
var g1 = parseInt(prompt("Введите номер клетки по горизонтали, куда вы хотите пойти"));

if ((v-v1) == 0 || (g-g1) == 0) {
    console.log("Вы не сделали ход")
}
else if (v < 1 || g1 < 1 || v1 > 8 || g1 > 8) {
    console.log("Вы вышли за пределы доски")
}
else if ((Math.abs(v - v1) == 1 && Math.abs(g - g1) == 2) || (Math.abs(v - v1) == 2 && Math.abs(g - g1) == 1)) {
    console.log("True");
} else {
    console.log("False")
}



