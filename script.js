// Functions to add, subtract, multiply, divide and reminder

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
    return a / b;
}
function modulo(a, b) {
    return a % b;
}

// Variables to store the numbers and operator

let firstNum = "";
let secondNum = "";
let operatorVar = "";

// Operate function for performing the operation

const operate = (firstNum, operator, secondNum) => {
    let result = 0;
    if (operator === "+") {
        result = add(firstNum, secondNum);
    } else if (operator === "-") {
        result = subtract(firstNum, secondNum);
    } else if (operator === "*") {
        result = multiply(firstNum, secondNum);
    } else if (operator === "/") {
        result = divide(firstNum, secondNum);
    } else if (operator === "%") {
        result = modulo(firstNum, secondNum);
    }
    return result;
};

let firstScreen = document.getElementById("firstLine");
firstScreen.innerHTML = "";
let secondScreen = document.getElementById("secondLine");
secondScreen.innerHTML = "";

function numSelect(num) {
    if (num === ".") {
        if (
            secondScreen.innerHTML === "" ||
            secondScreen.innerHTML.includes(".")
        ) {
        } else {
            secondScreen.innerHTML += num;
        }
    } else {
        secondScreen.innerHTML += num;
    }
}

function operatorNew(operator) {
    operatorVar = operator;
    firstScreen.innerHTML = firstNum + operator;
}

function operatorSelect(operator) {
    if (secondScreen.innerHTML != "") {
        firstNum = secondScreen.innerHTML;
        firstScreen.innerHTML = firstNum + " ";
        secondScreen.innerHTML = "";
        operatorVar = operator;
    }
}

function clearFunc() {
    secondScreen.innerHTML = "";
    firstScreen.innerHTML = "";
    firstNum = "";
    secondNum = "";
    operatorVar = "";
}

function deleteFunc() {
    secondScreen.innerHTML = "";
}

function equalFunc() {
    secondNum = secondScreen.innerHTML;
    let result = operate(firstNum, operatorVar, secondNum);
    firstScreen.innerHTML = result;
    secondScreen.innerHTML = "";
    secondNum = "";
    firstNum = result;
    operatorVar = "";
}
