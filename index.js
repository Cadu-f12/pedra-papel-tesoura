const score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    lose: 0,
    tie: 0
}
let pElem1 = document.querySelector('.js-paragraph-1');
let pElem2 = document.querySelector('.js-paragraph-2');

updateLabel(score.win, score.lose, score.tie);

function computerplayerMove() {
    let computerMoviment = Math.random();
    if (computerMoviment > 0 && computerMoviment < 1/3) {
        return 'rock';
    }
    if (computerMoviment > 1/3 && computerMoviment < 2/3) {
        return'paper'
    }
    if (computerMoviment > 2/3 && computerMoviment < 1) {
        return 'scissors'
    }
}
function playGame(playerMove) {
    let computerMoviment = computerplayerMove();
    let isWin;

    if (computerMoviment === playerMove) {
        score.tie++;
        isWin = 0;
    }
    if (computerMoviment === 'paper' && playerMove === 'scissors') {
        score.win++;
        isWin = 1;
    }
    if (computerMoviment === 'paper' && playerMove === 'rock') {
        score.lose++;
    }
    if (computerMoviment === 'scissors' && playerMove === 'rock') {
        score.win++;
        isWin = 1;
    }
    if (computerMoviment === 'scissors' && playerMove === 'paper') {
        score.lose++;
    }
    if (computerMoviment === 'rock' && playerMove === 'paper') {
        score.win++;
        isWin = 1;
    }
    if (computerMoviment === 'rock' && playerMove === 'scissors') {
        score.lose++;
    }

    if (isWin === 1) {
        pElem1.innerHTML = 'You win';
    } else if (isWin === 0) {
        pElem1.innerHTML = 'You tie';
    } else {
        pElem1.innerHTML = 'You lose';
    }
    
    pElem2.innerHTML = `You
    <img src="img/${playerMove}.png" class="move-icon">
    <img src="img/${computerMoviment}.png" class="move-icon">
    Computer.`;

    updateLabel(score.win, score.lose, score.tie);

    localStorage.setItem('score', JSON.stringify(score));
}
function updateLabel(win, lose, tie) {
    document.querySelector('.js-paragraph-3').innerHTML = `WINS: ${win} | LOSES: ${lose} | TIES: ${tie}`;
}