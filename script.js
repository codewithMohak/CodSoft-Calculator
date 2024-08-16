const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.value === 'C') {
            clearDisplay();
        } else if (button.value === '=') {
            calculateResult();
        } else if (['+', '-', '*', '/'].includes(button.value)) {
            operator = button.value;
            previousInput = currentInput;
            currentInput = '';
        } else {
            currentInput += button.value;
            updateDisplay(currentInput);
        }
    });
});

function updateDisplay(value) {
    display.innerText = value;
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    previousInput = '';
    updateDisplay('0');
}

function calculateResult() {
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
        default:
            return;
    }
    currentInput = result.toString();
    updateDisplay(currentInput);
    operator = '';
    previousInput = '';
}
