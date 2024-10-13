const paraEl = document.querySelector(".welcome");
const phases = [
    "Welcome to Om's World, where ideas meet innovation!",
    "Step in, explore, and discover the mind behind the code.",
    "A place where creativity and technology collide. Welcome!",
    "Welcome to Om's digital space—where curiosity fuels creation."];
let phaseIndex = 0;
let charIndex = 0;

function textAni() {
    paraEl.innerHTML = `${phases[phaseIndex].slice(0, charIndex)}|`;
    charIndex++;
    if (charIndex > phases[phaseIndex].length) {
        charIndex = 0;
        phaseIndex++; 
    }
    if (phaseIndex >= phases.length) {
        phaseIndex = 0;
    }
    setTimeout(textAni, 120);
}
document.addEventListener("DOMContentLoaded", textAni);