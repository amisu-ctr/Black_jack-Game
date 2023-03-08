let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;
let cards = [firstCard, secondCard]
let hasBlackJack = false;
let isAlive = true
let message = ""
const messageEl = document.getElementById('message-el')
const sumEl = document.getElementById('sum-el')
const cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for(i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + ' ';
    }
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

function newCard() {
    let card = 6;
    sum += card
    cards.push(card)
    renderGame()
}


