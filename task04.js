// Задание № 4

// Задачи 1

/* Создать объекта боец, у которого есть имя, фамилия и прочие атрибуты, а также атрибут "рюкзак", в который нужно положить всё необходимое (Определить атрибуты рюкзака). Положить в рюкзак удочку, наживку, леску, грузила и крючки.
1*. + предметы в рюкзаке имеют вес
+ функция/метод, выводящая этот вес
+ метод положить/выбросить в рюкзак
+ количество для одинаковых предметов */

function task_4_1() { 
    console.log(' Боец: объект - рыбак, \n предметы в его рюкзаке: метод \'рыбак.рюкзак\', \n узнать вес предмета в рюкзаке: метод \'вес\', \n добавить/удалить предмет из рюкзака: функции add(\'something\'), throw_out(\'something\')');
}

var рыбак = {имя: 'Иннокентий', 
           фамилия: 'Петров', 
           возраст: 42, 
           рюкзак: {удочка: {
               вес: '5 кг',
               количество: 1
           },
                     наживка: {
               вес: '0,5 кг',
               количество: 1
           },
                     леска: {
               вес: '0,2 кг',
               количество: 1
           },
                     грузила: {
               вес: '1 кг',
               количество: 1
           },
                     крючки: {
               вес: '0,5 кг',
               количество: 1
           }}};


function add(something) {
    for (key in рыбак.рюкзак) {
        if (something == key) {
            рыбак.рюкзак[key].количество += 1;
            console.log(рыбак.рюкзак[key].количество + ' ' + key)
        }
    }    
};
function  throw_out(something) {
    for (key in рыбак.рюкзак) {
        if (something == key) {
            if (рыбак.рюкзак[key].количество > 0) {
                рыбак.рюкзак[key].количество -= 1;
            console.log(key + ' ' + рыбак.рюкзак[key].количество + ' шт')
            }            
        }
    }    
};
    
 

//Задачи 2 - Стой, стрелять буду!

/* 2. Функция проверки авторизации по паре логин-пароль, которая выводит сообщения:
Здравствуй, [login]!
Неверная пара логин-пароль
логин-пароль должен хранится в объекте "security" с полями login и password. */
var security = {логин1 : 'пароль1',
                qwerty : 123,
                Alesya : '12FD'};

function task_4_2_1() {    
    var a = prompt('Введите имя пользователя');
    var b = prompt('Введите пароль');
    function chekPassword(login, password) {
        if (password == security[login]) {
            console.log('Здравствуй, ' + login +'!')
        } else {
            console.log('Неправильный логин или пароль');
            security[login] = password;
        }
    };
    chekPassword(a, b)
};


/* 2* Hаписать функцию регистрации пользователей (+имя, фамилия, о себе и т.д.)
Админ может смотреть список пользователей и пары логин-пароль */



//Задачи 3 - Игра морской бой

/* 3. Создать объект поля морской  бой (10*10)
и заполнить его кораблями
Написать функцию, которая будет по координатам (x,y) проверять попадание в цель */
function task_4_3() { 
    var x = parseInt(prompt('Введите первую координату'));
    var y = parseInt(prompt('Введите вторую координату'));
    var sea = [[0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
               [0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
               [0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
               [1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
               [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
               [0, 0, 1, 0, 0, 0, 0, 0, 1, 0],];
    
    function findShip(x,y) {
        if (x > 9 || y > 9 || x < 0 || y < 0) {
            return console.log('Вы вышли за пределы поля')
        } else if (sea[x][y] == 1) {
            return console.log('Попал')
        } else {
            return console.log('Мимо')
        }
    } 
    findShip(x,y)
};

//Задачи 4 - Смартфон

/* 4. Создать объект "Сматфон" у которого заданы поля: имя, память(hdd), память(ram) и список приложений (имя, hdd, ram)
Добавить список запущенных приложений.
Посчитать потребление памяти (hdd, ram)
4. * Возможность устанавливать НОВЫЕ приложения из объекта market (Если хватает памяти+устройство поддерживается[список])
Запуск и остановка приложений
Удаление приложений и очистка памяти */
function task_4_4() {
    var smart={}
    smart.name='g9100';
    smart['hdd']=8192;//Mb
    smart['ram']=2048;//Mb
    smart.apps=[];//Установленные приложения
    smart.active=[];//Запущенные приложения
    smart.addapp=function(name,hdd,ram){
        x=smart.apps.length;
        smart.apps[x]={};
        smart.apps[x].name=name;
        smart.apps[x].hdd=hdd;
        smart.apps[x].ram=ram;
    }
    smart.start=function(n){
        smart.active.push(n);
    }
    smart.mystatus=function(){
        usedhdd=0;
        for (i=0;i<smart.apps.length;i++){
            usedhdd+=smart['apps'][i].hdd;
        }
        usedram=120;
        for (i=0;i<smart.active.length;i++){
            j=smart.active[i];            
            usedram+=smart['apps'][j].ram;
        }
        console.log('Модель:' +smart.name+' \nЖесткий диск: '+usedhdd+'/'+smart.hdd+'\nПотребление памяти: '+usedram+'/'+smart.ram);
    }
    smart.addapp('firefox',30,250);
    smart.addapp('opera',300,200);
    smart.addapp('chrome',50,300);
    smart.addapp('Мимимишки',120,5)
    smart.start(2);
    smart.mystatus();
}


//Задачи 5 - Рекурсия

/* 5.1 Посчитать значения факториала числа при помощи функции рекурсивно
N! = N*(N-1)! , 1! = 1 */
function task_4_5_1() {
    var a = parseInt(prompt('Введите число'));
    function rec(a) {
        if (a == 1) {
            return 1
        }
        return a*(rec(a-1))
    }
    console.log(rec(a))
};

/* 5.2 Цифры числа записать справа-налево
153 => 351 */
function task_4_5_2() {
    var a = prompt('Введите число');
    str = '';
    function rec(a) {
        if (a < 10) {           
            str += (Math.floor(a));
            return str
        } else {
            str += (Math.floor(a%10));
            return rec(a/10)
        }   
    };
    console.log(rec(a))
};


/* 5.3 Определить является ли указанное число степенью заданного числа
12 , 2 NO
16 , 2 YES */
function task_4_5_3() {
    var a = parseInt(prompt('Введите первое число'));
    var b = parseInt(prompt('Введите второе число'));
    function rec(a, b) {
        while(a > 1){            
            if (a == b) {
                console.log('YES')
            }
            if (a < b) {
                return console.log('NO');
                break
            }
            return rec(a/b,b)
       }        
    };
    rec(a, b) 
};


//Задачи 6 - Рекурсия

//6.1 Разложить число на простые множители в порядке возрастания и с учетом кратности

//var a = prompt('Введите число');
//function rec(a) {
//
//}
//        
        




/* 6.2 J: Палиндром
Дано слово, состоящее только из строчных латинских букв. Проверьте, является ли это слово палиндромом. Выведите YES или NO. 
radar – yes
Yes - no */
function task_4_6_2() {
    var a = prompt('Введите слово');
    function rec(a) {
        if (a.length == 1) {
            return console.log('YES')
        } else {
            if (a[0] == a[a.length-1]) {
                if (a.length == 2) {
                    return console.log('YES');
                };            
                return rec(a.substring(1, a.length-1))
            } else {
                return console.log('NO')
            }
        }    
    };
    rec(a)
}
