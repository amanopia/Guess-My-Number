const logger = function(){
    console.log("aPPLE");
}
document.querySelector('.check').addEventListener('click', function(){
    console.log(document.querySelector('.guess').value);
})