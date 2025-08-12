window.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key >= '0' && key <= '9') {
        if (waitingForSecondNumber) {
            clearDisplay();
            waitingForSecondNumber = false;
        }
        updateDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        handleOperator(key);
    } else if (key === 'Enter' || key === '=') {
        btnEquals.click();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === '.') {
        if (!display.textContent.includes('.')) {
            updateDisplay('.');
        }
    }
});

let firstNumber = null;
let operator = null;
let waitingForSecondNumber = false;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

let operators = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide
}

function operate(firstNumber, secondNumber, operator) {
    if (operator in operators) {
        return operators[operator](firstNumber, secondNumber);
    } else {
        throw new Error("Invalid operator.");
    }
}

function handleOperator(nextOperator) {
    const currentDisplayValue = parseFloat(display.textContent);

    if (operator && waitingForSecondNumber === false) {
        const result = operate(firstNumber, currentDisplayValue, operator);
        display.textContent = roundNumber(result);
        firstNumber = roundNumber(result); 
    } else {
        firstNumber = currentDisplayValue;
    }
    operator = nextOperator; 
    waitingForSecondNumber = true; 
}

const display = document.getElementById('display');

function updateDisplay(value) {
    display.textContent += value;
}

function clearDisplay() {
    display.textContent = '';
    firstNumber = null;
    operator = null;
    waitingForSecondNumber = false;
}

function resetDisplay() {
    display.textContent = '';
}

function backspace() {
    display.textContent = display.textContent.slice(0, -1);
}

function roundNumber(num) {
    if (Number.isInteger(num)) {
        return num;
    } else {
        return parseFloat(num.toFixed(4));
    }
}

const btnOne = document.getElementById('one');
btnOne.addEventListener('click', () => {
    if (waitingForSecondNumber) {
        resetDisplay();
        waitingForSecondNumber = false;
    }
    updateDisplay('1');
});

const btnTwo = document.getElementById('two');
btnTwo.addEventListener('click', () => {
    if (waitingForSecondNumber) {
        resetDisplay();
        waitingForSecondNumber = false;
    }   
    updateDisplay('2');
});

const btnThree = document.getElementById('three');
btnThree.addEventListener('click', () => {
    if (waitingForSecondNumber) {
        resetDisplay();
        waitingForSecondNumber = false;
    }
    updateDisplay('3');
});

const btnFour = document.getElementById('four');
btnFour.addEventListener('click', () => {
    if (waitingForSecondNumber) {
        resetDisplay();
        waitingForSecondNumber = false;
    }
    updateDisplay('4');
});

const btnFive = document.getElementById('five');
btnFive.addEventListener('click', () => {
    if (waitingForSecondNumber) {
        resetDisplay();
        waitingForSecondNumber = false;
    }
    updateDisplay('5');
});

const btnSix = document.getElementById('six');
btnSix.addEventListener('click', () => {
    if (waitingForSecondNumber) {
        resetDisplay();
        waitingForSecondNumber = false;
    }   
    updateDisplay('6');
});

const btnSeven = document.getElementById('seven');
btnSeven.addEventListener('click', () => {
    if (waitingForSecondNumber) {
        resetDisplay();
        waitingForSecondNumber = false;
    }
    updateDisplay('7');
});

const btnEight = document.getElementById('eight');
btnEight.addEventListener('click', () => {
    if (waitingForSecondNumber) {
        resetDisplay();
        waitingForSecondNumber = false;
    }
    updateDisplay('8');
}); 

const btnNine = document.getElementById('nine');
btnNine.addEventListener('click', () => {
    if (waitingForSecondNumber) {
        resetDisplay();
        waitingForSecondNumber = false;
    }
    updateDisplay('9');
}); 

const btnZero = document.getElementById('zero');
btnZero.addEventListener('click', () => {
    if (waitingForSecondNumber) {
        resetDisplay();
        waitingForSecondNumber = false;
    }
    if (display.textContent === '' || display.textContent === '0') {
        return; 
    }
    updateDisplay('0');
}); 


const btnAdd = document.getElementById('add');
btnAdd.addEventListener('click', () => handleOperator('+'));

const btnSubtract = document.getElementById('subtract');
btnSubtract.addEventListener('click', () => handleOperator('-'));

const btnMultiply = document.getElementById('multiply');
btnMultiply.addEventListener('click', () => handleOperator('*'));

const btnDivide = document.getElementById('divide');
btnDivide.addEventListener('click', () => handleOperator('/'));

const btnDecimal = document.getElementById('decimal');
btnDecimal.addEventListener('click', () => {
    if (!display.textContent.includes('.')) {
        updateDisplay('.');
    }
});

const btnEquals = document.getElementById('equals');
btnEquals.addEventListener('click', () => {
    const currentDisplayValue = parseFloat(display.textContent);
    if (operator && !isNaN(currentDisplayValue)) {
        const result = operate(firstNumber, currentDisplayValue, operator);
        display.textContent = roundNumber(result);
        firstNumber = null; 
        operator = null; 
        waitingForSecondNumber = true;
    }
});

const btnBackspace = document.getElementById('backspace');
btnBackspace.addEventListener('click', () => {
    backspace();
});

const btnClear = document.getElementById('clear');
btnClear.addEventListener('click', () => {
    clearDisplay();
});