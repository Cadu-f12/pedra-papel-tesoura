const computer = {
    score: 0
}
const player = {
    score: 0
}

function computerMove() {
    let computerMoviment = Math.random();
    if (computerMoviment > 0 && computerMoviment < 1/3) {
        return 'rock';
    }
    if (computerMoviment > 1/3 && computerMoviment < 2/3) {
        return'paper';
    }
    if (computerMoviment > 2/3 && computerMoviment < 1) {
        return 'scissors';
    }
}
function playerMove(move) {
    let computerMoviment = computerMove();

    if (computerMoviment === move) {
        alert('Draw! ' + 'the computer chose ' + computerMoviment + `\nYOU: ${player.score} | Computer: ${computer.score}`)
    }
    if (computerMoviment === 'paper' && move === 'scissors') {
        player.score++;
        alert('You win! ' + 'the computer chose ' + computerMoviment + `\nYOU: ${player.score} | Computer: ${computer.score}`)
    }
    if (computerMoviment === 'paper' && move === 'rock') {
        computer.score++;
        alert('You lose! ' + 'the computer chose ' + computerMoviment + `\nYOU: ${player.score} | Computer: ${computer.score}`)
    }
    if (computerMoviment === 'scissors' && move === 'rock') {
        player.score++;
        alert('You win! ' + 'the computer chose ' + computerMoviment + `\nYOU: ${player.score} | Computer: ${computer.score}`)
    }
    if (computerMoviment === 'scissors' && move === 'paper') {
        computer.score++;
        alert('You lose! ' + 'the computer chose ' + computerMoviment + `\nYOU: ${player.score} | Computer: ${computer.score}`)
    }
    if (computerMoviment === 'rock' && move === 'scissors') {
        computer.score++;
        alert('You lose! ' + 'the computer chose ' + computerMoviment + `\nYOU: ${player.score} | Computer: ${computer.score}`)
    }
    if (computerMoviment === 'rock' && move === 'paper') {
        player.score++;
        alert('You win! ' + 'the computer chose ' + computerMoviment + `\nYOU: ${player.score} | Computer: ${computer.score}`)
    }
}