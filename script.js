const logger = function(){
    console.log("aPPLE");
}

let guess;
document.querySelector('.check').addEventListener('click', function(){
    guess = Number(document.querySelector('.guess').value);
    
    if(!guess){
        // since empty input field means, 0, and zero is a falsy value, so !false true
        document.querySelector('.message').textContent = "Enter a number";
    }
    console.log(guess, typeof guess);
})