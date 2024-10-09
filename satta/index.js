const containers = document.querySelectorAll('.container');
const dots = Array.from(containers).map(container => container.querySelector('div'));
let positions = Array(dots.length).fill(0);
let speeds = positions.map(() => randomizer()); 

function randomizer() {
    return Math.random() * 10 + 1; 
}

function moveDots() {
    dots.forEach((dot, index) => {
        const containerWidth = containers[index].offsetWidth;
        positions[index] += speeds[index]; 
        dot.style.left = positions[index] + 'px'; 

        if (positions[index] >= containerWidth - dot.offsetWidth) {
            positions[index] = 0;
            speeds[index] = randomizer();
        }
    });
    requestAnimationFrame(moveDots); 
}

document.querySelector('button').addEventListener('click', moveDots);
