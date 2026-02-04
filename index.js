const score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    lose: 0,
    tie: 0
}
        
function computerMove() {
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
function playerMove(move) {
    let computerMoviment = computerMove();

    if (computerMoviment === move) {
        score.tie++;
        alert('Draw! ' + 'the computer chose ' + computerMoviment + `\nWINS: ${score.win} | LOSES: ${score.lose} | TIES: ${score.tie}`)
    }
    if (computerMoviment === 'paper' && move === 'scissors') {
        score.win++;
        alert('You win! ' + 'the computer chose ' + computerMoviment + `\nWINS: ${score.win} | LOSES: ${score.lose} | TIES: ${score.tie}`)
    }
    if (computerMoviment === 'paper' && move === 'rock') {
        score.lose++;
        alert('You lose! ' + 'the computer chose ' + computerMoviment + `\nWINS: ${score.win} | LOSES: ${score.lose} | TIES: ${score.tie}`)
    }
    if (computerMoviment === 'scissors' && move === 'rock') {
        score.win++;
        alert('You win! ' + 'the computer chose ' + computerMoviment + `\nWINS: ${score.win} | LOSES: ${score.lose} | TIES: ${score.tie}`)
    }
    if (computerMoviment === 'scissors' && move === 'paper') {
        score.lose++;
        alert('You lose! ' + 'the computer chose ' + computerMoviment + `\nWINS: ${score.win} | LOSES: ${score.lose} | TIES: ${score.tie}`)
    }
    if (computerMoviment === 'rock' && move === 'paper') {
        score.win++;
        alert('You win! ' + 'the computer chose ' + computerMoviment + `\nWINS: ${score.win} | LOSES: ${score.lose} | TIES: ${score.tie}`)
    }
    if (computerMoviment === 'rock' && move === 'scissors') {
        score.lose++;
        alert('You lose! ' + 'the computer chose ' + computerMoviment + `\nWINS: ${score.win} | LOSES: ${score.lose} | TIES: ${score.tie}`)
    }

    localStorage.setItem('score', JSON.stringify(score));
}