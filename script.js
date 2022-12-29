// implementing random number functionality
let secretNumber = Math.ceil(Math.random() * 20);
console.log(secretNumber);

let scoreElement = document.querySelector('.score');
let score = 20;
let highScoreElement = document.querySelector('.highscore');

function scoreReducer(){
    score--;
    scoreElement.textContent = score;
}

// guess defined outside the scope of the eventHandler function
let guess;
document.querySelector('.check').addEventListener('click', function(){
    guess = Number(document.querySelector('.guess').value);
    
    if(!guess){
        // since empty input field means, 0, and zero is a falsy value, so !false true
        document.querySelector('.message').textContent = "Enter a number";
    } else if(guess === secretNumber) {
        document.querySelector('.message').textContent = "Correct Number!!!";
    } else if(guess > secretNumber) {
        document.querySelector('.message').textContent = "Number too high!";
        scoreReducer();
        // since score is declared globally, we can use the function, since it is reducing the score on a global level
    } else {
        document.querySelector('.message').textContent = "Number too low";
        scoreReducer();
    }
    console.log(guess, typeof guess);
})