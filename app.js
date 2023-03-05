//CONSTANT DECLARATION
const score = document.querySelector('#score');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const newgame = document.querySelector('#new');
const winscore = document.querySelector('#winscore');
const winscorepara = document.querySelector('#winscorepara');
const winner=document.querySelector('#winner');
//VARIABLE DECLARATION
let player1score = 0;
let player2score = 0;
function displaytoflex() {
    score.style.display = 'flex';
    player1.style.display = 'flex';
    player2.style.display = 'flex';
    winscorepara.style.display = 'flex';
}
//FUNCTION DECLARATIOM
function result() {
    let winingscore = winscore.value;
    if (winingscore == player1score || winingscore == player2score) {
        winner.style.display='flex';
        if (winingscore == player1score) {
            // console.log('player1');
            winner.innerText='PLAYER 1 WINS!!!!'
        }
        else {
            // console.log('player2');
            winner.innerText='PLAYER 2 WINS!!!!'
        }
        player1score = 0;
        player2score = 0;
        player1.style.display='none';
        player2.style.display='none';
    }
}
//ADDINDING EVENTS
newgame.addEventListener('click', () => {
    displaytoflex();
    newgame.innerText='NEW';
    player1score = 0;
    player2score = 0;
    winscore.value=1;
    winner.style.display='none';
    score.innerHTML = `SCORE = ${player1score} : ${player2score}`;
})
player1.addEventListener('click', () => {
    player1score++;
    score.innerHTML = `SCORE = ${player1score} : ${player2score}`;
    result()
});
player2.addEventListener('click', () => {
    player2score++;
    score.innerHTML = `SCORE = ${player1score} : ${player2score}`;
    result()
});