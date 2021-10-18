btn1.onclick = () => {
    table.style.opacity = "1";
    table.style.pointerEvents = "all";
    table.classList.add("animateLine1");
    table.classList.add("animateLine2");
    btn1.style.opacity = "0"
    btn1.style.pointerEvents = "none";
}
var turn = 'x';
var xl = 0;
var ol = 0;
var lastPlayer = undefined;
var gameOver = false;
var box = document.getElementsByClassName("box");
var takenSpots = 0;
var resultText = document.getElementById('resultText');

var spots = [
    " ", " ", " ",
    " ", " ", " ",
    " ", " ", " "
];

var win_spots = [
    [0, 1, 2], //1
    [3, 4, 5], //2
    [6, 7, 8], //3
    [2, 5, 8], //4
    [1, 4, 7], //5
    [0, 3, 6], //6
    [2, 4, 6], //7
    [0, 4, 8]  //8
];

for (var i = 0; i < box.length; i++) {
    box_mousedown(box[i], i);
}

function box_mousedown(el, index) {
    el.onmousedown = function () {
        insert(index);
    }
}

function insert(id) {
    if (spots[id] == " " && !gameOver) {
        if (turn == x) {
            turn = o;
            takenSpots++;
            lastPlayer = "o";
        }
        else {
            turn = x;
            takenSpots++;
            lastPlayer = "x";
            xl++;
        }
        spots[id] = lastPlayer;
        check_win();
        box[id].innerHTML = turn;
    }
}

function check_win() {
    if(!gameOver && takenSpots == 9)  {
        console.log('draw!');
        resultText.innerHTML = 'Draw! 🤷‍♂️';
        resultText.style.opacity = '1';
        resultText.style.left = '50%';
    }
    else {
        for (i in win_spots) {
            how_win(win_spots[i], i);
        }
    }
    
}

function how_win(spot, index) {
    if (
        spots[spot[0]] == "x" && spots[spot[1]] == "x" && spots[spot[2]] == "x" ||
        spots[spot[0]] == "o" && spots[spot[1]] == "o" && spots[spot[2]] == "o"
    ) {
        gameOver = true;
        // console.log(lastPlayer.toUpperCase() + " wins! ");
        resultText.innerHTML = lastPlayer.toUpperCase() + " wins! 🎉";
        resultText.style.opacity = '1';
        resultText.style.left = '50%';
        var a = parseInt(index) + 1;
        if (a <= 3) {
            console.log(a); //print last postion
            //chnage line color
            if (lastPlayer == 'x') {
                document.getElementById("winline" + a).style.background = "red";
            }
            else {
                document.getElementById("winline" + a).style.background = "black";
            }
            document.getElementById("winline" + a).style.width = "100%";
        }
        else if (a <= 6) {
            console.log(a); //print last postion
            //chnage line color
            if (lastPlayer == 'x') {
                document.getElementById("winline" + a).style.background = "red";
            }
            else {
                document.getElementById("winline" + a).style.background = "black";
            }
            document.getElementById("winline" + a).style.height = "100%";
        }
        else if (a == 7) {
            console.log(a) //print last postion
            //chnage line color
            if (lastPlayer == 'x') {
                document.getElementById("winline" + a).style.background = "red";
            }
            else {
                document.getElementById("winline" + a).style.background = "black";
            }
            document.getElementById("winline" + a).style.height = "100%";
        }
        else if (a == 8) {
            console.log(a) //print last postion
            //chnage line color
            if (lastPlayer == 'x') {
                document.getElementById("winline" + a).style.background = "red";
            }
            else {
                document.getElementById("winline" + a).style.background = "black";
            }
            document.getElementById("winline" + a).style.height = "100%";
        }
    }
}