let currentInput = '0';
let operator = null;
let previousInput = null;

function updateDisplay() {
    document.getElementById('display').innerText = currentInput;
}

function inputNumber(num) {
    if (currentInput === '0') {
        currentInput = num.toString();
    } else {
        currentInput += num.toString();
    }
    updateDisplay();
}

function inputDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

function inputOperator(op) {
    if (operator && previousInput !== null && currentInput !== '0') {
        performCalculation();
    }
    previousInput = currentInput;
    operator = op;
    currentInput = '0';
}

function performCalculation() {
    if (!operator || previousInput === null) {
        return;
    }
    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Không thể chia cho 0!");
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operator = null;
    previousInput = null;
    updateDisplay();
}

function resetCalculator() {
    currentInput = '0';
    operator = null;
    previousInput = null;
    updateDisplay();
}

updateDisplay();