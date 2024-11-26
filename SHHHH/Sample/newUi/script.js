const paraEl = document.querySelector(".welcome");
const phases = [
    "Discover opportunities that shape your future!",
    "Unlock your potential with the perfect internship!",
    "Take the first step toward a brilliant career!",
    "Empower your journey with exciting new roles!"
];
let phaseIndex = 0;
let charIndex = 0;

function textAni() {
    paraEl.innerHTML = `${phases[phaseIndex].slice(0, charIndex)}|.`;
    charIndex++;
    if (charIndex > phases[phaseIndex].length) {
        charIndex = 0;
        phaseIndex = (phaseIndex + 1) % phases.length;
    }
    setTimeout(textAni, 90);
}

document.addEventListener("DOMContentLoaded", textAni);

const applyButtons = document.querySelectorAll('.apply-btn');

applyButtons.forEach(button => {
    button.addEventListener('click', function() {
        const companyName = this.closest('.job-card').getAttribute('data-company');
        document.getElementById('companyNameDisplay').textContent = companyName;
        
        document.querySelector('.job-list').style.display = 'none';
        document.getElementById('applicationForm').style.display = 'block';
    });
});

document.getElementById('applicationDetailsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Application submitted successfully! We will get in touch with you.");
    document.getElementById('applicationDetailsForm').reset();
    document.getElementById('applicationForm').style.display = 'none';
    document.querySelector('.job-list').style.display = 'block';
});