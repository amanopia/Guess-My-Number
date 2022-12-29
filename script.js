// implementing random number functionality
let secretNumber = Math.ceil(Math.random() * 20);
console.log(secretNumber);

let scoreElement = document.querySelector('.score');
let message = document.querySelector('.message');
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
        message.textContent = "Enter a number";
    } else if(guess === secretNumber) {
        message.textContent = "Correct Number!!!";
    } else if(guess > secretNumber) {
        if(score > 1){
            message.textContent = "Number too high!";
            scoreReducer();
        } else {
            message.textContent = "You lost the game!";
            scoreElement.textContent=0;
        }
    } else {
        if(score > 1){
            message.textContent = "Number too low";
            scoreReducer();
        } else {
            message.textContent = "You lost the game!";
            scoreElement.textContent = 0
        }
    }
})

// _____________ Project notes
// since score is declared globally, we can use the function, since it is reducing the score on a global level