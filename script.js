let player = {
  name : "Prabin" ,
  chips : 200
}
let cards = []
let sum = 0
let message =""
let cardsEl = document.querySelector("#cards-el")
let isAlive = false
let hasBlackjack = false
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + " :" + " $" + player.chips
function startgame(){

  let firstCard = getRandomCards()
  let secondCard = getRandomCards()
  cards = [firstCard ,secondCard]
  sum = firstCard + secondCard
   isAlive = true

  rendergame();
}

function getRandomCards() {
  let randomCards = Math.floor(Math.random()* 13) + 1
  if (randomCards >10){
    return 10
  } else if (randomCards === 1){
    return 11
  }else {
    return randomCards
  }
}



function rendergame(){
  cardsEl.textContent = "Cards :"
  for(let i = 0; i< cards.length ; i++){
   cardsEl. textContent +=  cards[i] + " "

  }
  if(sum < 21){
    message = "Do you want to draw a new card ? "
    isAlive = true
} else if (sum === 21){
  message = " You've got a black jack! "
  hasBlackjack = false
} else {
  message = "You are out of the game ! "
  isAlive = false
}
document.getElementById("message-el").textContent = message;
document.getElementById("sum-el").textContent = "Sum :" + sum;

console.log(message)
}

function newcard(){

  if(isAlive === true && hasBlackjack === false){
    let card = getRandomCards();

    sum+= card
    cards.push(card)
    rendergame()
  }
  
}
