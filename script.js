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

const display = document.getElementById('display');

function updateDisplay(value) {
    display.textContent += value;
}

function clearDisplay() {
    display.textContent = '';
}

function backspace() {
    display.textContent = display.textContent.slice(0, -1);
}

const btnOne = document.getElementById('one');
btnOne.addEventListener('click', () => {
    updateDisplay('1');
});

const btnTwo = document.getElementById('two');
btnTwo.addEventListener('click', () => {
    updateDisplay('2');
});

const btnThree = document.getElementById('three');
btnThree.addEventListener('click', () => {
    updateDisplay('3');
});

const btnFour = document.getElementById('four');
btnFour.addEventListener('click', () => {
    updateDisplay('4');
});

const btnFive = document.getElementById('five');
btnFive.addEventListener('click', () => {
    updateDisplay('5');
});

const btnSix = document.getElementById('six');
btnSix.addEventListener('click', () => {
    updateDisplay('6');
});

const btnSeven = document.getElementById('seven');
btnSeven.addEventListener('click', () => {
    updateDisplay('7');
});

const btnEight = document.getElementById('eight');
btnEight.addEventListener('click', () => {
    updateDisplay('8');
}); 

const btnNine = document.getElementById('nine');
btnNine.addEventListener('click', () => {
    updateDisplay('9');
}); 

const btnZero = document.getElementById('zero');
btnZero.addEventListener('click', () => {
    updateDisplay('0');
}); 

const btnAdd = document.getElementById('add');
btnAdd.addEventListener('click', () => {
    updateDisplay('+');
});

const btnSubtract = document.getElementById('subtract');
btnSubtract.addEventListener('click', () => {
    updateDisplay('-');
});

const btnMultiply = document.getElementById('multiply');
btnMultiply.addEventListener('click', () => {
    updateDisplay('*');
});

const btnDivide = document.getElementById('divide');
btnDivide.addEventListener('click', () => {     
    updateDisplay('/');
});

const btnDecimal = document.getElementById('decimal');
btnDecimal.addEventListener('click', () => {
    if (!display.textContent.includes('.')) {
        updateDisplay('.');
    }
});

const btnEquals = document.getElementById('equals');
btnEquals.addEventListener('click', () => {
    updateDisplay('=');
    const input = display.textContent;
    const parts = input.split(/([+\-*/])/);
    if (parts.length < 3) {
        alert("Please enter a valid expression.");
        return;
    }
    const firstNum = parseFloat(parts[0]);
    const secondNum = parseFloat(parts[2]);
    const operator = parts[1].trim();
    try {
        const result = operate(firstNum, secondNum, operator);
        display.textContent = result;
    } catch (error) {
        alert(error.message);
        clearDisplay();
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