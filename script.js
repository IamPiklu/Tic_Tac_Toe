console.log("Welcome to Tic Tac Toe")
let music = new Audio("game.mp3")
let audioTurn = new Audio("ting.mp3")
let gameoveraudio = new Audio("gameover.mp3")
let turn = "X"
let gameover = false;

const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    win.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won "
            gameover = true
            document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "206px"
            Array.from(boxtexts).forEach(element => {
                element.innerText = ''
            })
        }
    })
}

//main logig
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }

        }
    })
})
//adding resat function
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ''
    })
    turn = "X"
    gameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "0px"

})