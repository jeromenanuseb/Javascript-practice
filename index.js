/*
console.log(`Hello`);

window.alert(`This is an alert`);
*/

//Calculator
let num1 = 200;
let num2 = 500;
let operation = '+';

//function to perform calculation
function calculate(num1, num2, op) {
    let result;
    if (op == '+') {
        result = num1 + num2;
    }
    else if (op == '-') {
        result = num1 - num2;
    }
    else if (op == '*') {
        result = num1 * num2;
    }
    else if (op == '/') {
        result = num1 / num2;
    }
    else {
        result = 'INvalid Operation'
    }
    return result;
}

console.log(calculate(num1, num2, operation));

/* Variables 
let name = 'Jerome';
const age = 19;


function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('Jerome'));

let x = 100;

console.log(x);
*/