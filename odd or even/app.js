function qq(el) {
    return document.getElementById(el);
}
function qc(el) {
    return document.getElementsByClassName(el);
}
function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
var isStart = false;
var isRepeat = false;
var timer = undefined;
var num = getRandomNumberBetween(10, 99);
var score = 0;
qq('num').innerHTML = num;

function show() {
    num = getRandomNumberBetween(10, 99);
    score = 0;
    qq('num').innerHTML = num;
    
    qq('main').style.pointerEvents = "all";
    isStart = true;
    qq('main').style.top = "50%";
    qq('main').style.opacity = "1";
    qq('filter1').hidden = true;
    qq('barcont').style.width = '100%';
    qq('barcont').classList.remove('end');
    qq('barcont').classList.add('start');
    qq('text1').style.opacity = '0';
    qq('text1').style.top = '60%';

    qq('text4').style.opacity = '0';
    qq('text4').style.top = '40%';

    start();
}
function gameOver() {
    clearTimeout(timer);
    qq('barcont').style.width = '0%';
    qq('barcont').classList.add('end');
    qq('barcont').classList.remove('start');
    qq('main').style.pointerEvents = "none";
    qq('main').style.top = "60%";
    qq('main').style.opacity = "0";
    qq('score').innerHTML = score;
    qq('text4').style.opacity = '1';
    qq('text4').style.top = '50%';
    qq('btn3').style.pointerEvents = 'all';
}
window.onload = function () {
    qq('text1').style.opacity = '1';
    qq('text1').style.top = '50%';
    qq('filter1').onclick = show;
}
function start() {
    timer = setTimeout(gameOver, 15 * 1000);
    qq('btn1').onclick = function () {
        if (num % 2 == 0) {
            gameOver()
        }
        else {
            num = getRandomNumberBetween(10, 99);
            qq('num').innerHTML = num;
            score++;
        }
    }

    qq('btn2').onclick = function () {
        if (num % 2 == 1) {
            gameOver();
        }
        else {
            num = getRandomNumberBetween(10, 99);
            qq('num').innerHTML = num;
            score++;
        }
    }
}

btn3.onclick = show;