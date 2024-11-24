let currentInput = "";
let previousInput = "";
let operator = null;

function appendValue(value) {
    currentInput += value;
    updateDisplay();
}

function operate(op) {
    if (currentInput === "") return;
    if (previousInput !== "") {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

function calculate() {
    if (operator === null || currentInput === "") return;
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    switch (operator) {
        case "+":
            result = prev + curr;
            break;
        case "-":
            result = prev - curr;
            break;
        case "*":
            result = prev * curr;
            break;
        case "/":
            result = curr === 0 ? "Error" : prev / curr;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    previousInput = "";
    updateDisplay();
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = null;
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById("display");
    display.textContent = currentInput || "0";
}
