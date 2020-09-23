var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');

const scoreboard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result p');

const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertTo(letter) {
    if (letter === "r") return ("Rock");
    if (letter === "p") return ("Paper");
    if (letter === "s") return ("Scossors");
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertTo(user) + " beats " + convertTo(computer) + " You win !";
    document.getElementById(user).classList.add('greenGlow');
    setTimeout(() => {
        document.getElementById(user).classList.remove('greenGlow');
    }, 1000);
}

function lose(user, computer) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertTo(user) + " beats " + convertTo(computer) + " You loose !";
    document.getElementById(user).classList.add('redGlow');
    setTimeout(() => {
        document.getElementById(user).classList.remove('redGlow');
    }, 1000);
}

function draw(user, computer) {

    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertTo(user) + " equals " + convertTo(computer) + " Its a draw !";
    document.getElementById(user).classList.add('greyGlow');
    setTimeout(() => {
        document.getElementById(user).classList.remove('greyGlow');
    }, 1000);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case ("rs"):
        case ("pr"):
        case ("sp"):
            win(userChoice, computerChoice);
            break;
        case ("rp"):
        case ("ps"):
        case ("sr"):
            lose(userChoice, computerChoice);
            break;
        case ("rr"):
        case ("pp"):
        case ("ss"):
            draw(userChoice, computerChoice);
            break;
    }
}



function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    });

    paper_div.addEventListener('click', function() {
        game("p");
    });

    scissors_div.addEventListener('click', function() {
        game("s");
    });
}

main();