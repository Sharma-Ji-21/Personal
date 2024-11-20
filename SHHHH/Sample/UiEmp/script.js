const paraEl = document.querySelector(".welcome");
const phases = [
    "Select Company",
];
let phaseIndex = 0;
let charIndex = 0;

function textAni() {
    paraEl.innerHTML = `${phases[phaseIndex].slice(0, charIndex)}|.`;
    charIndex++;
    if (charIndex > phases[phaseIndex].length) {
        charIndex = 0;
        phaseIndex++; 
    }
    // if (phaseIndex >= phases.length) {
    //     // phaseIndex = 0;
    // }
    setTimeout(textAni, 150);
}
document.addEventListener("DOMContentLoaded", textAni);