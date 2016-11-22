// Задание № 2

// Задачи 1

//1.1 Используя цикл while и введенную с клавиатуры строку отобразить её наоборот.


var a = prompt("Введите слово");
a = a.toString();
var b = ""
var count = (a.length - 1);
while (count >= 0) {    
    b += a[count];
    count -= 1;    
}
console.log(b);
    


/*1.2 ** Перевести число, введенное с клавиатуры в систему счисления по основанию 3, отобразить цифры наоборот и перевести обратно в десятичную систему из троичной. */
var x = parseInt(prompt("Введите число"));
var c = '';

while (x > 0) {
    c = x%3 + c
    x = Math.floor(x/3)          
};
//console.log(c);

var len = c.length;
var ten = 0;
for (i=0; i<len; i++) {    
    ten += c[i]*Math.pow(3,i);
   };

console.log(ten)




//1.3 Посчитать сумму чисел от 1 до «введенного с клавиатуры неотрицательного числа».

var num = prompt("Введите неотрицательное число число");
if (num < 0) {
    alert("Вы ввели отрицательное число")
};
var q = 1;
var sum = 0
while (q<=num) {
    sum += q;
    q += 1;
}
console.log(sum)


// Задачи 2
/* 2.1 Написать Switch, который принимает на вход значение от 1 до 7 и отображает день недели. Если выбраны выходные (if) написать "Ура!"
   1 – "Понедельник"
   6 – "Ура! Суббота" */

var a = prompt('введите число от 1 до 7');
a = parseInt(a);
switch(a) {
    case 1: console.log('Понедельник'); break;
    case 2: console.log('Вторник'); break;
    case 3: console.log('Среда'); break;
    case 4: console.log('Четверг'); break;
    case 5: console.log('Пятница'); break;
    case 6: console.log('Ура! Суббота!'); break;
    case 7: console.log('Ура! Воскресенье!'); break;
    default: console.log('Нужно ввести число от 1 до 7')
}


/*2.2 Написать меню игры, в котором принимаются команды: 'start' , 'options' и 'exit'. После ввода команды выполняется действие команды и ожидается следующая (кроме exit ).
   При 'start' выведите "начало", при 'options' => "опции", при 'exit' => "выход". При вводе других команд напишите – "команда не распознана" */

while (true) {
    var a = prompt("Введите команду");
    if (a == 'exit') {
        console.log("выход"); 
        break;
    }
    else {
        switch (a) {
        case 'start': console.log("начало"); break;
        case 'options': console.log("опции"); break;        
        default: console.log("команда не распознана");
        }
    }
}

    
// Задачи 3
/* Используя форматирование вывода вывести числа от [начального] (ввод с клавиатуры) до [конечного] в виде [n] колонок.
	Пример для 1 15 5
	1	2	3	4	5
	6	7	8	9	10
	11	12	13	14	15
Пример для 1 15 3
	1	2	3
	4	5	6
	7	8	9
	10	11	12
	13	14	15
** Учесть длину числа, используемую при выводе */

var a = prompt("Введите 3 числа (начальное, конечное и длинну колонки)");
var b = a.split(' ');
var first = b[0];
var last = b[1];
var step = b[2];
var c = "";
var count = 0
for (i = first; i <= last; i++) {
    count += 1;
    if (count%step == 0) {
       c += (i + '\n')
    } else {
    c += (i + '\t')
    }
};
console.log(c)




