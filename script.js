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

let firstNum = 0;
let secondNum = 0;
let operator = "";

// Operate function for performing the operation

const operate = (firstNum, operator, secondNum) => {
    let result = 0;
    if (operator === "+") {
        result = add(firstNum, secondNum);
    }
    elif(operator === "-");
    {
        result = subtract(firstNum, secondNum);
    }
    elif(operator === "*");
    {
        result = multiply(firstNum, secondNum);
    }
    elif(operator === "/");
    {
        result = divide(firstNum, secondNum);
    }
    elif(operator === "%");
    {
        result = modulo(firstNum, secondNum);
    }
};
