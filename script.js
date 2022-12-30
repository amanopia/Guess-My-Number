// assigning element objects to variables
let scoreElement = document.querySelector('.score');
let message = document.querySelector('.message');
let againBtn = document.querySelector('.again');
let body = document.querySelector('body');
let number = document.querySelector('.number');
let highScoreElement = document.querySelector('.highscore');
let inputField = document.querySelector('.guess');
let heading = document.querySelector('h1');
let checkBtn = document.querySelector('.check');

// implementing random number functionality
let secretNumber = Math.ceil(Math.random() * 20);
console.log(secretNumber);

// Initialising two state variables
let highScore = 0;
let score = 10;

// Reducing Scores
function scoreReducer(){
    score--;
    scoreElement.textContent = score;
}

// Playing audio function
function playSound (path){
    let audio = new Audio(path);
    audio.play();
}

// Game lost function
function gameLost() {
    message.textContent = "You lost the game!";
    scoreElement.textContent = 0;
    body.style.backgroundColor="#e61a0b";
    heading.textContent = "The Number Was...";
    number.textContent = secretNumber;
    playSound("./sound/lose.wav");
}

// guess defined outside the scope of the eventHandler function
let guess;
checkBtn.addEventListener('click', function(){
    guess = Number(inputField.value);
    
    // playing audio on click
    playSound("./sound/click.wav");

    if(!guess){
        // since empty input field means, 0, and zero is a falsy value, so !false true
        message.textContent = "Enter a number";
    } else if(guess === secretNumber) {
        
        message.textContent = "Correct Number!!";
        heading.textContent = 'Yay!! Correct Guess...'
        checkBtn.disabled = true;
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
        playSound("./sound/win.wav");

    } else if(guess > secretNumber) {
        if(score > 1){
            message.textContent = "Number too high!";
            scoreReducer();
        } else {
            gameLost();
        }
    } else {
        if(score > 1){
            message.textContent = "Number too low";
            scoreReducer();
        } else {
            gameLost();
        }
    }
})

againBtn.addEventListener('click',function(){
    playSound('./sound/again.wav');
    score = 10;
    scoreElement.textContent = score;
    // styles
    body.style.backgroundColor="#222";
    number.style.width="15rem";
    // textContent
    number.textContent="?";
    message.textContent = "Start guessing...";
    heading.textContent = "Guess My Number!";
    // recalculating secret number
    secretNumber = Math.ceil(Math.random() * 20);
    console.log(secretNumber);
    // resetting input field value
    inputField.value="";
    checkBtn.disabled = false;
})

// _____________ Project notes _____________

// since score is declared globally, we can use the function, since it is reducing the score on a global level