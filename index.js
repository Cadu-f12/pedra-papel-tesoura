const score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    lose: 0,
    tie: 0
}
let pElem1 = document.querySelector('.js-paragraph-1');
let pElem2 = document.querySelector('.js-paragraph-2');

let isPlaying = false;
let intervalId;

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
        pElem1.innerHTML = 'Você venceu!';
    } else if (isWin === 0) {
        pElem1.innerHTML = 'Vocês empataram';
    } else {
        pElem1.innerHTML = 'Você perdeu';
    }
    
    pElem2.innerHTML = `Você pegou
    <img src="img/${playerMove}.png" class="move-icon">
    <img src="img/${computerMoviment}.png" class="move-icon">
    O computador pegou.`;

    updateLabel(score.win, score.lose, score.tie);

    localStorage.setItem('score', JSON.stringify(score));
}
function updateLabel(win, lose, tie) {
    document.querySelector('.js-paragraph-3').innerHTML = `Vitórias: ${win} | Derrotas: ${lose} | Empates: ${tie}`;
}
function autoPlay() {
    const autoPlayElement = document.querySelector('.auto-play-button');

    if (!isPlaying) {
        intervalId = setInterval(
            () => {
                let computerMove = computerplayerMove();

                playGame(computerMove);
            }, 500
        );
        autoPlayElement.innerHTML = 'Parar';
        isPlaying = true;
        return;
    }
    
    autoPlayElement.innerHTML = 'Jogada automatica';
    clearInterval(intervalId);
    isPlaying = false;
}