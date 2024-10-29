const paraEl = document.querySelector(".welcome");
const phases = ["Welcome to the Registration Page", "Please Enter Company Details"];
const Pass = document.getElementById("Password");
const ConfirmPass = document.getElementById("ConfirmPassword");

function validateForm() {
    if (Pass.value !== ConfirmPass.value) {
        alert("Password and Confirm Password do not match");
        return false;
    } else {
        alert("Registration Successful");
        window.location.href = "../loginComp.html";
        return false;
    }
}

let phaseIndex = 0;
let charIndex = 0;

function textAni() {
    paraEl.innerHTML = `${phases[phaseIndex].slice(0, charIndex)}|`;
    charIndex++;
    if (charIndex > phases[phaseIndex].length) {
        charIndex = 0;
        phaseIndex++;
    }
    if (phaseIndex < phases.length) {
        setTimeout(textAni, 120);
    }
}
document.addEventListener("DOMContentLoaded", textAni);
