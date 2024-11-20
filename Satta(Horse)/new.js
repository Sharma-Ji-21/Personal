const startRaceButton = document.getElementById("startRaceButton");
const restartButton = document.getElementById("restart");
const result = document.getElementById("Results");
const placeBetButton = document.getElementById("placeBetButton");

// Start
startRaceButton.addEventListener("click", () => {
    //bets
    const horse1bet=document.getElementById("horse1-bet").value;
    const horse2bet=document.getElementById("horse2-bet").value;
    const horse3bet=document.getElementById("horse3-bet").value;
    const horse4bet=document.getElementById("horse4-bet").value;
    const horse5bet=document.getElementById("horse5-bet").value;

    const bets = [horse1bet, horse2bet, horse3bet, horse4bet, horse5bet];

    // validating betting
    if (bets.filter(bet => bet > 0).length > 1) {
        alert("Only one bet is allowed!");
        return;
    } else if (bets.every(bet=>bet<=0)) {
        alert("Please place a bet.");
        return;
    }

    placeBetButton.style.display="none";
    startRaceButton.style.display="none";

    const horses=[
        document.getElementById("innerhorse1"),
        document.getElementById("innerhorse2"),
        document.getElementById("innerhorse3"),
        document.getElementById("innerhorse4"),
        document.getElementById("innerhorse5")
    ];
    let horsePositions = [0, 0, 0, 0, 0];
    const trackWidth = window.innerWidth - 100;
    let intervalId=setInterval(()=>{
        // speed
        horsePositions=horsePositions.map(pos=>pos+Math.random()*20);
        horses.forEach((horse,index)=>{
            horse.style.left=horsePositions[index]+"px";
        });
        // winner
        const winners=horsePositions.map((pos,index)=>(pos>=trackWidth?index:-1)).filter(index=>index!=-1);
        if (winners.length>0) {
            clearInterval(intervalId);
            const winnerIndex=winners[0];
            const winner=`Horse ${winnerIndex+1}`;
            result.textContent=`${winner} wins`;
            // restart button
            restartButton.style.display="inline-block";
            startRaceButton.style.display="none";
        }
    }, 100);
});

// restart button
restartButton.addEventListener("click", () => {
    // reset
    const horses = [
        document.getElementById("innerhorse1"),
        document.getElementById("innerhorse2"),
        document.getElementById("innerhorse3"),
        document.getElementById("innerhorse4"),
        document.getElementById("innerhorse5")
    ];
    horses.forEach(horse => (horse.style.left = "0px"));
    result.textContent="";
    restartButton.style.display="none";
    startRaceButton.style.display="block";

    document.getElementById("horse1-bet").value="";
    document.getElementById("horse2-bet").value="";
    document.getElementById("horse3-bet").value="";
    document.getElementById("horse4-bet").value="";
    document.getElementById("horse5-bet").value="";
});
