
let sum;
let firstCard ;
let secondCard;
let hasBlackjack;
let isAlive;
let message = "";
let cardArr;
let playQ = document.querySelector("#playQuestion");
let sumDis = document.querySelector("#sum");
let cardDis = document.querySelector("#cards");

let playerInfo = {
    name : "You",
    chips : 50
}

let playerDis = document.querySelector("#player");
playerDis.textContent = playerInfo.name + ": $"+ playerInfo.chips;
//starts the game
function start(){
    isAlive = true;
    hasBlackjack = false
    firstCard = Math.floor(Math.random()*13)+1;
    secondCard = Math.floor(Math.random()*13)+1;
    if(firstCard > 11){
        firstCard = 10;
    }
    if(secondCard > 11){
        secondCard = 10;
    }
    cardArr = [firstCard,secondCard];
    sum = firstCard + secondCard;


    renderGame();
}
//Changes the card and sum numbers and tells you if you won,lost, or need to draw
function renderGame(){
    
    sumDis.textContent = "Sum: "+ sum;
    cardDis.textContent = "Cards: " + cardArr;

if(sum<=20){
    message = "Do you want to draw"
}else if(sum == 21){
    message = "You hit the Blackjack"
    hasBlackjack = true;
    playerInfo.chips += 10;
    playerDis.textContent = playerInfo.name +": $"+playerInfo.chips;
}else{
    message = "You bust"
    isAlive = false;
    playerInfo.chips -= 10;
    playerDis.textContent = playerInfo.name + ": $"+ playerInfo.chips;
}
playQ.textContent = message;

//creates a new card and adds it to the array then runs the render function
}
function newCard(){
    if(isAlive==true && hasBlackjack==false){
    let nCard = Math.floor(Math.random()*13)+1;
    if(nCard > 11){
        nCard = 10;
    }
    sum += nCard;
    cardArr.push(nCard);
    renderGame();
    }
    
 //creates a random number and test it againt the sum to see who wins   
}
function test(){
    if(isAlive==true && hasBlackjack==false){
    let testNum = Math.floor(Math.random()*22)
    if (testNum <= sum){
        playQ.textContent ="You beat the AI"
        playerInfo.chips += 10;
        playerDis.textContent = playerInfo.name + ": $"+ playerInfo.chips;
        
    }else{
        playQ.textContent ="You lost to the AI"
        playerInfo.chips -= 10;
        playerDis.textContent = playerInfo.name + ": $"+ playerInfo.chips;
    }
    isAlive=false;
 }
}