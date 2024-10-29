const paraEl = document.querySelector(".welcome");
const phases = [
    "Welcome to the Registration Page",
    "Please Enter Your Details",
];
const Pass = document.getElementById("Password");
const ConfirmPass = document.getElementById("ConfirmPassword");

function validateForm() {
    if (Pass.value !== ConfirmPass.value) {
        alert("Password and Confirm Password do not match");
        return false;
    } else {
        window.location.href = "../loginEmp.html";
        alert("Registration Successful");
        return false;
    }
}

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
        // phaseIndex = 0;
    }

    setTimeout(textAni, 120);
}

document.addEventListener("DOMContentLoaded", textAni);
