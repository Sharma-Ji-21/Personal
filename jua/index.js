setTimeout(() => {
    const prompt = require("prompt-sync")();
    let name = prompt("Enter Your Name: ");
    let newName = name.toLowerCase();
    
    if (newName === '') {
        console.log("Name can't be empty");
        return false;
    } else {
        console.log(`Welcome ${name} to the Game Of Cards`);
    }

    let suits = ['Clubs', 'Diamonds', 'Spades', 'Hearts'];
    let ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let deck = [];

    for (let suit of suits) {
        for (let rank of ranks) {
            deck.push(`${rank} of ${suit}`);
        }
    }

    let playerHand = [];
    let computerHand = [];

    const dealCards = (hand, count) => {
        for (let i = 0; i < count; i++) {
            let x = Math.floor(Math.random() * deck.length);
            hand.push(deck[x]);
            deck.splice(x, 1);
        }
    };

    dealCards(playerHand, 5);
    dealCards(computerHand, 5);

    console.log("Here are your cards:");
    console.log(playerHand);

    let getCardValue=(card)=>{
        let cardValue=card.split(" ")[0];
        let value;
        if(cardValue==='A'){
            value= 14;
        }
        else if(cardValue==='J'){
            value= 11;
        }
        else if(cardValue==='Q'){
            value= 12;
        }
        else if(cardValue==='K'){
            value= 13;
        }
        else{
            value=parseInt(cardValue);
        }
        return value;
    }

    setTimeout(() => {
        let playerScore = 0;
        let computerScore = 0;
        let round;

        let input = prompt("Once you are ready, press [y] to continue, [n] to exit: ");
        if (input.toLowerCase() === 'y') {
            let playercard;
            let computerCard;
            console.log("Let's start the game!");
            for(round=1;round<=5;round++){
                playercard=playerHand[round-1];
                computerCard=computerHand[round-1];
                if (getCardValue(playercard)>getCardValue(computerCard)){
                    console.log(`Round ${round}: ${name} wins with ${playercard} against ${computerCard}`);
                    playerScore++;
                }
                else{
                    console.log(`Round ${round}: Computer wins with ${computerCard} against ${playercard}`);
                    computerScore++;
                }
            }
        } else {
            console.log("Thanks for playing!");
            clearTimeout();
        }
    }, 3000);
});
