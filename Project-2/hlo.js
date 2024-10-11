let problem = [];

function updateDisplay() {
    document.getElementById("display").value = problem.join("");
}
function pushvalue(num) {
    problem.push(num);
    updateDisplay();
}


function add() {
    problem.push("+");
    updateDisplay();
}

function subtract() {
    problem.push("-");
    updateDisplay();
}

function multiply() {
    problem.push("*");
    updateDisplay();
}

function divide() {
    problem.push("/");
    updateDisplay();
}
function erase(){
    problem.pop();
    updateDisplay();
}

function decimal(){
    problem.push(".");
    updateDisplay();
}


function calculate() {
    let expression = problem.join("");
    if (['+', '-', '/', '*'].includes(problem[0]) || ['+', '-', '/', '*'].includes(problem[problem.length - 1])) {
        alert('Invalid expression');
        return;
    }
    if (expression === "") {
        alert("No expression to calculate!");
        return;
    }
    for (let i = 1; i < expression.length; i++) {
        if (['+', '-', '/', '*'].includes(problem[i]) && ['+', '-', '/', '*'].includes(problem[i-1])){
            alert("Invalid expression");
            return;
        }
    }
    let result = eval(expression); // eval just solve the problem no matter if the calculation is in string
    document.querySelector("input").value = result;
    problem = [result];
}

function clearInput() {
    problem = [];
    updateDisplay();
}


