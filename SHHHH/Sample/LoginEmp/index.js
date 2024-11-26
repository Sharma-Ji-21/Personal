const paraEl = document.querySelector(".welcome");
const phases = [
    "Welcome to the Login Page", 
    "Please Enter Your Details"
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
    if (phaseIndex >= phases.length) {
        // phaseIndex = 0; // Reset to loop the phrases/
    }
    setTimeout(textAni, 120);
}

document.addEventListener("DOMContentLoaded", textAni);

// Login validation logic
function validateForm() {
    const name = document.getElementById("Name").value.trim();
    const email = document.getElementById("Email").value.trim();
    const password = document.getElementById("Password").value.trim();

    if (name === "Om Sharma" && email === "om@gmail.com" && password === "123") {
        alert("Login Successful!");
        window.location.href = "../newUi/index.html";
        return false;
    } else {
        alert("Invalid Credentials! Please try again.");
        return false;
    }
}
