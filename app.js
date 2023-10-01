const output = document.querySelector('.output');
let firstNumber = '';
let operator = '';
let secondNumber = '';
let isEnteringSecondNumber = false;
let decimalPressed = false;

function clearCalculator() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    output.textContent = '0';
}

function handleOperatorClick(op) {
    if (firstNumber !== '') {
        if (operator !== '') {
            operate();
        }
        operator = op;
        isEnteringSecondNumber = true;
        output.textContent += ` ${op} `;
        decimalPressed = false;
    }
}

function handleNumberClick(digit) {
    if (!isEnteringSecondNumber) {
        if (firstNumber.length < 9) {
            firstNumber += digit;
            output.textContent = firstNumber;
        }
    } else {
        if (secondNumber.length < 9) {
            secondNumber += digit;
            output.textContent = `${firstNumber} ${operator} ${secondNumber}`;
        }
    }
}

function operate() {
    if (firstNumber !== '' && secondNumber !== '') {
        switch (operator) {
            case '+':
                firstNumber = (parseFloat(firstNumber) + parseFloat(secondNumber)).toString();
                break;
            case '-':
                firstNumber = (parseFloat(firstNumber) - parseFloat(secondNumber)).toString();
                break;
            case 'x':
                firstNumber = (parseFloat(firstNumber) * parseFloat(secondNumber)).toString();
                break;
            case '÷':
                if (parseFloat(secondNumber) === 0) {
                    alert("Division by zero is not allowed.");
                    clearCalculator();
                    return;
                }
                let result = parseFloat(firstNumber) / parseFloat(secondNumber);
                firstNumber = result.toFixed(2);
                break;
        }
        output.textContent = firstNumber;
        secondNumber = '';
        isEnteringSecondNumber = false;
        operator = '';
    }
}

// Event listeners for button clicks
document.querySelector('.clearBtn').addEventListener('click', clearCalculator);
document.querySelector('.divideBtn').addEventListener('click', () => handleOperatorClick('÷'));
document.querySelector('.addBtn').addEventListener('click', () => handleOperatorClick('+'));
document.querySelector('.subtractBtn').addEventListener('click', () => handleOperatorClick('-'));
document.querySelector('.timesBtn').addEventListener('click', () => handleOperatorClick('x'));
document.querySelector('.zeroBtn').addEventListener('click', () => handleNumberClick('0'));
document.querySelector('.oneBtn').addEventListener('click', () => handleNumberClick('1'));
document.querySelector('.twoBtn').addEventListener('click', () => handleNumberClick('2'));
document.querySelector('.threeBtn').addEventListener('click', () => handleNumberClick('3'));
document.querySelector('.fourBtn').addEventListener('click', () => handleNumberClick('4'));
document.querySelector('.fiveBtn').addEventListener('click', () => handleNumberClick('5'));
document.querySelector('.sixBtn').addEventListener('click', () => handleNumberClick('6'));
document.querySelector('.sevenBtn').addEventListener('click', () => handleNumberClick('7'));
document.querySelector('.eightBtn').addEventListener('click', () => handleNumberClick('8'));
document.querySelector('.nineBtn').addEventListener('click', () => handleNumberClick('9'));
document.querySelector('.equalsBtn').addEventListener('click', operate);
document.querySelector('.percentBtn').addEventListener('click', () => {
    if (firstNumber !== '' && !isEnteringSecondNumber) {
        firstNumber = (parseFloat(firstNumber) / 100).toString();
        output.textContent = firstNumber;
    } else if (secondNumber !== '' && isEnteringSecondNumber) {
        secondNumber = (parseFloat(secondNumber) / 100).toString();
        output.textContent = `${firstNumber} ${operator} ${secondNumber}`;
    }
});
document.querySelector('.posnegBtn').addEventListener('click', () => {
    if (firstNumber !== '' && !isEnteringSecondNumber) {
        firstNumber = (parseFloat(firstNumber) * -1).toString();
        output.textContent = firstNumber;
    } else if (secondNumber !== '' && isEnteringSecondNumber) {
        secondNumber = (parseFloat(secondNumber) * -1).toString();
        output.textContent = `${firstNumber} ${operator} ${secondNumber}`;
    }
});
document.querySelector('.decimalBtn').addEventListener('click', () => {
    if (!decimalPressed) {
        if (!isEnteringSecondNumber) {
            firstNumber += '.';
        } else {
            secondNumber += '.';
        }
        output.textContent += '.';
        decimalPressed = true;
    }
});
