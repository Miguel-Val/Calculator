const clearBtn = document.querySelector('.clearBtn');
const posnegBtn = document.querySelector('.posnegBtn');
const percentBtn = document.querySelector('.percentBtn');
const divideBtn = document.querySelector('.divideBtn');
const sevenBtn = document.querySelector('.sevenBtn');
const eightBtn = document.querySelector('.eightBtn');
const nineBtn = document.querySelector('.nineBtn');
const timesBtn = document.querySelector('.timesBtn');
const fourBtn = document.querySelector('.fourBtn');
const fiveBtn = document.querySelector('.fiveBtn');
const sixBtn = document.querySelector('.sixBtn');
const subtractBtn = document.querySelector('.subtractBtn');
const oneBtn = document.querySelector('.oneBtn');
const twoBtn = document.querySelector('.twoBtn');
const threeBtn = document.querySelector('.threeBtn');
const addBtn = document.querySelector('.addBtn');
const zeroBtn = document.querySelector('.zeroBtn');
const decimalBtn = document.querySelector('.decimalBtn');
const equalsBtn = document.querySelector('.equalsBtn');
const output = document.querySelector('.output');
const answer = document.querySelector('.answer');


let outputText = '';
let firstNumber = ''; 
let operator = '';
let secondNumber = ''; 
let isEnteringSecondNumber = false;


clearBtn.addEventListener('click', () => {
  firstNumber = ''
  secondNumber = ''
  operator = ''
  outputText = ''
  output.innerHTML = '';
});

posnegBtn.addEventListener('click', () => {
  
});
percentBtn.addEventListener('click', () => {
  
});

divideBtn.addEventListener('click', () => {
  handleOperatorClick('÷');
  handleNumberClick('', '÷');
});

addBtn.addEventListener('click', () => {
  handleOperatorClick('+')
  handleNumberClick('', '+');
  
});

subtractBtn.addEventListener('click', () => {
  handleOperatorClick('-');
  handleNumberClick('', '-');
});

timesBtn.addEventListener('click', () => {
  handleOperatorClick('x');
  handleNumberClick('', 'x');
});


zeroBtn.addEventListener('click', () => {
  handleNumberClick('0', operator);
});

oneBtn.addEventListener('click', () => {
  handleNumberClick('1', operator);
});
twoBtn.addEventListener('click', () => {
  handleNumberClick('2', operator);
});
threeBtn.addEventListener('click', () => {
  handleNumberClick('3', operator);
});
fourBtn.addEventListener('click', () => {
  handleNumberClick('4', operator);
});
fiveBtn.addEventListener('click', () => {
  handleNumberClick('5', operator);
});
sixBtn.addEventListener('click', () => {
  handleNumberClick('6', operator);
});
sevenBtn.addEventListener('click', () => {
  handleNumberClick('7', operator);
});
eightBtn.addEventListener('click', () => {
  handleNumberClick('8', operator);
});
nineBtn.addEventListener('click', () => {
  handleNumberClick('9', operator);
});

equalsBtn.addEventListener('click', () => {
 operate()
  
});


function handleNumberClick(digit) {
  if (!isEnteringSecondNumber) {
    firstNumber += digit;
    outputText += digit;
  } else {
    secondNumber += digit;
    outputText += digit;
  }
  output.innerHTML = outputText;
}

function handleOperatorClick(op) { 
  if (firstNumber !== '') {
    if (operator !== ''){
      operate();
    }
    operator = op;
    isEnteringSecondNumber = true; 
    outputText += ' ' + op + ' ';
    output.innerHTML = outputText;
  }

}

function operate() {
  if(firstNumber !== '' && secondNumber !== '') {
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
            return;
          }
          firstNumber = (parseFloat(firstNumber) / parseFloat(secondNumber)).toString();
          break;
    }
    outputText = firstNumber;
    secondNumber = '';
    isEnteringSecondNumber = false;
    operator = '';
    output.innerHTML = outputText;
  }
    
}














