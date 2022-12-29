// implementing random number functionality
let secretNumber = Math.ceil(Math.random() * 20);
console.log(secretNumber);

let scoreElement = document.querySelector('.score');
let message = document.querySelector('.message');
let againBtn = document.querySelector('.again');
let body = document.querySelector('body');
let number = document.querySelector('.number');
let highScoreElement = document.querySelector('.highscore');
let inputField = document.querySelector('.guess');

// Initialising two state variables
let highScore = 0;
let score = 20;

function scoreReducer(){
    score--;
    scoreElement.textContent = score;
}

// guess defined outside the scope of the eventHandler function
let guess;
document.querySelector('.check').addEventListener('click', function(){
    guess = Number(inputField.value);
    
    if(!guess){
        // since empty input field means, 0, and zero is a falsy value, so !false true
        message.textContent = "Enter a number";
    } else if(guess === secretNumber) {
        
        message.textContent = "Correct Number!!!";
        
        // when player wins
        // background-color: green
        // box-containing the number increases in width
        // new high score is set if score is greater than the previous high score

        if(score > highScore){
            highScore = score;
            highScoreElement.textContent = highScore; 
        }

        body.style.backgroundColor = "#60b347";
        number.style.width = "30rem";
        number.textContent = secretNumber;

    } else if(guess > secretNumber) {
        if(score > 1){
            message.textContent = "Number too high!";
            scoreReducer();
        } else {
            message.textContent = "You lost the game!";
            scoreElement.textContent=0;
            body.style.backgroundColor="#e61a0b";
        }
    } else {
        if(score > 1){
            message.textContent = "Number too low";
            scoreReducer();
        } else {
            message.textContent = "You lost the game!";
            scoreElement.textContent = 0;
            body.style.backgroundColor="#e61a0b";
        }
    }
})

againBtn.addEventListener('click',function(){
    score = 20;
    scoreElement.textContent = 20;
    // styles
    body.style.backgroundColor="#222";
    number.style.width="15rem";
    // textContent
    number.textContent="?";
    message.textContent = "Start guessing..."
    // recalculating secret number
    secretNumber = Math.ceil(Math.random() * 20);
    console.log(secretNumber);
    // resetting input field value
    inputField.value="";
})
// _____________ Project notes _____________

// since score is declared globally, we can use the function, since it is reducing the score on a global level