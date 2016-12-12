function task_7_1() {
    var div = document.getElementsByClassName('select_option')

    var select = document.createElement('select');
    select.size = 4;
    select.multiple = true;

    var item_name = document.createElement('p');
    var item1 = document.createElement('option');
    var item2 = document.createElement('option');
    var item3 = document.createElement('option');
    var item4 = document.createElement('option');
    var item5 = document.createElement('option');
    var item6 = document.createElement('option');
    var tags = [item_name, item1, item2, item3, item4, item5, item6];

    var text_name = document.createTextNode('Выберите свой любимый цвет:');
    var text1 = document.createTextNode('Фиолетовый');
    var text2 = document.createTextNode('Красный');
    var text3 = document.createTextNode('Синий');
    var text4 = document.createTextNode('Зелёный');
    var text5 = document.createTextNode('Желтый');
    var text6 = document.createTextNode('Розовый');
    var texts = [text_name, text1, text2, text3, text4, text5, text6];

    for (var i=0; i<=6; i++) {
        tags[i].appendChild(texts[i]); 
    }

    for (var i=1; i<=6; i++) {
       select.appendChild(tags[i])
    }
    div[0].appendChild(item_name)
    div[0].appendChild(select)
};


function task_7_2() {      
    var html = document.getElementsByTagName('html');  
    var intervalID = setInterval(function(){ myTimer() }, 1000);

    function myTimer() {
        setTimeout(function() {
            html[0].style.backgroundColor = 'white'}, 500)
        html[0].style.backgroundColor = 'yellow';     
    }
    
    var stop = document.getElementById('task_7_2_stop');
    stop.onclick = function (){
        clearInterval(intervalID)
    } 
}

function task_7_3() {
    var green = parseInt(prompt('Установите сколько секунд должен гореть зелёный свет'))*1000;
    var red = parseInt(prompt('Установите сколько секунд должен гореть красный свет'))*1000;
    time = green + red + 1000;
    console.log(green, red, time)
    var light = document.getElementsByClassName('light');
   
    var intervalID = setInterval(function(){ myTimer() }, time);
    
    function myTimer() {
        setTimeout(function() {
            setTimeout(function() {
                    setTimeout(function() {
                        setTimeout(function() {
                        light[0].style.backgroundColor = 'yellow'}, red);
                    light[0].style.backgroundColor = 'red'}, 500);
                light[0].style.backgroundColor = 'yellow'}, green);
            light[0].style.backgroundColor = 'green'}, 500)
        };               
}






