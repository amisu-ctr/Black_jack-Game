let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true
let message = ""
const messageEl = document.getElementById('message-el')
const sumEl = document.getElementById('sum-el')
const cardsEl = document.getElementById("cards-el")


function startGame() {
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = 'Do you want to draw a new card?';
      } else if (sum === 21) {
        message = 'Whoo! youve got Blackjack!'
        hasBlackJack = true;
      } else {
        message = "you're out of the game!"
        isAlive = false
      }

      messageEl.textContent = message
}



