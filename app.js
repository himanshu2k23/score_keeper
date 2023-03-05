//CONSTANT DECLARATION
const score = document.querySelector('#score');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const newgame = document.querySelector('#new');
const winscoreinput = document.querySelector('#winscoreinput');
const winscorepara = document.querySelector('#winscorepara');
const winner=document.querySelector('#winner');
const submitwinscore=document.querySelector('#submitwinscore');
const winscoretext=document.querySelector('#winscoretext');
//VARIABLE DECLARATION
let player1score = 0;
let player2score = 0;
let winingscore = 0;
function displaytoflex() {
    score.style.display = 'flex';
    player1.style.display = 'flex';
    player2.style.display = 'flex';
}
//FUNCTION DECLARATIOM
function result() {
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
    winscorepara.style.display = 'flex';
    //winscoretext.innerText='Set the winning score here...'; 
    winscoreinput.style.display='flex';
    submitwinscore.style.display='flex';
    newgame.innerText='NEW';
    player1score = 0;
    player2score = 0;
    winner.style.display='none';
    score.innerHTML = `SCORE = ${player1score} : ${player2score}`;
})
submitwinscore.addEventListener('click',()=>{
    displaytoflex();
    winingscore = winscoreinput.value;
    winscoreinput.style.display='none';
    submitwinscore.style.display='none';
    winscoretext.innerText=`The winning score is ${winingscore}`;
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
