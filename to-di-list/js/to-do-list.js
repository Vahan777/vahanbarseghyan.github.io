/* Добавляем ко всем спискам иконку крестик для удаления */
var myNodelist = document.getElementsByTagName('li');
for (var i = 0; i < myNodelist.length; i++) {
    var span = document.createElement('span');
    // var txt = document.createTextNode('\u00D7');
    var txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
/* Добавляем ко всем спискам иконку крестик для удаления */

/* При нажатии на крестик удаляем данный пункт */
var close = document.getElementsByClassName('close');
for (var i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = 'none';
    }
}
/* При нажатии на крестик удаляем данный пункт */

/* При нажатии на пункт отмечаем его как выполненный */
var list = document.querySelector('ul');
list.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
}, false);
/* При нажатии на пункт отмечаем его как выполненный */

/* Добавляем новый Task */
function newElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('myInput').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert('Поле не может быть пустым ... !');
    } else {
        document.getElementById('myUL').appendChild(li);
    }
    document.getElementById('myInput').value = '';

    var span = document.createElement('span');
    var txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);

    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = 'none';
        }
    }
}
/* Добавляем новый Task */


















