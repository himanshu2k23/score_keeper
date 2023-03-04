const score = document.querySelector('#score');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const newgame = document.querySelector('#new');
const winscore = document.querySelector('#winscore');
function displaytoflex() {
    score.style.display = 'flex';
    player1.style.display = 'flex';
    player2.style.display = 'flex';
    winscore.style.display = 'flex';
}
newgame.addEventListener('click', () => {
    displaytoflex();
    player1score = 0;
    player2score = 0;
    player1.addEventListener('click', () => {
        player1score++;
        score.innerHTML=`Score = ${player1score} : ${player2score}`;
    });
    player2.addEventListener('click', () => {
        player2score++;
        score.innerHTML=`Score = ${player1score} : ${player2score}`;
    });
    
})