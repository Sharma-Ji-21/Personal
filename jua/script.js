let playerName;
let playerHand = [];
let computerHand = [];
let deck = [];
const cardRound = 5;
let currentRound = 0;
let playerScore = 0;
let computerScore = 0;

function startGame() {
    playerName = document.getElementById("playerName").value.trim();
    if (playerName === '') {
        document.getElementById("error").innerText = "❌ Name can't be empty";
        return;
    }
    document.querySelector(".setup").style.display = "none";
    document.querySelector(".game-container").style.display = "flex";
    document.getElementById("welcomeMessage").innerText = `🎉 Welcome ${playerName} to the Game Of Cards 🃏`;
    initializeDeck();
    dealCards(playerHand, cardRound);
    dealCards(computerHand, cardRound);
    displayPlayerCards();
}

function initializeDeck() {
    const suits = ['♣️ Clubs', '♦️ Diamonds', '♠️ Spades', '♥️ Hearts'];
    const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    deck = [];
    for (let suit of suits) {
        for (let rank of ranks) {
            deck.push(`${rank} of ${suit}`);
        }
    }
}

function dealCards(hand, count) {
    for (let i = 0; i < count; i++) {
        let randomIndex = Math.floor(Math.random() * deck.length);
        hand.push(deck[randomIndex]);
        deck.splice(randomIndex, 1);
    }
}

function displayPlayerCards() {
    const playerCardsList = document.getElementById("playerCards");
    playerCardsList.innerHTML = '';
    playerHand.forEach((card, index) => {
        let listItem = document.createElement("li");
        listItem.innerText = card;
        listItem.onclick = () => selectCard(index);
        playerCardsList.appendChild(listItem);
    });
}

function selectCard(index) {
    const playerCardsList = document.getElementById("playerCards").children;
    Array.from(playerCardsList).forEach(li => li.classList.remove("selected"));
    playerCardsList[index].classList.add("selected");
    playRound(index);
}

function getCardValue(card) {
    let cardValue = card.split(" ")[0];
    if (cardValue === 'A') return 14;
    if (cardValue === 'K') return 13;
    if (cardValue === 'Q') return 12;
    if (cardValue === 'J') return 11;
    return parseInt(cardValue);
}

function playRound(playerCardIndex) {
    if (currentRound >= cardRound) return;

    const results = document.getElementById("results");
    const playerCard = playerHand[playerCardIndex];
    const computerCard = computerHand[currentRound];

    if (getCardValue(playerCard) >= getCardValue(computerCard)) {
        results.innerHTML += `<p>🏆 Round ${currentRound + 1}:\n${playerName} wins with ${playerCard} against ${computerCard}</p>`;
        playerScore++;
    } else {
        results.innerHTML += `<p>💻 Round ${currentRound + 1}:\nComputer wins with ${computerCard} against ${playerCard}</p>`;
        computerScore++;
    }

    playerHand.splice(playerCardIndex, 1);
    currentRound++;
    displayPlayerCards();

    if (currentRound === cardRound) displayFinalScore();
}

function displayFinalScore() {
    const results = document.getElementById("results");
    results.innerHTML += `<h3>📊 Final Score: ${playerName} - ${playerScore}, Computer - ${computerScore}</h3>`;
    if (playerScore > computerScore) {
        results.innerHTML += `<h2>🎉 ${playerName} wins the game! 👏</h2><p>Thanks for playing! 🎮</p>`;
    } else {
        results.innerHTML += `<h2>🤖 Computer wins the game!</h2><p>Thanks for playing! 🎮</p>`;
    }
}
