// function functionName() {}
function sayHi() {
    // function body
    console.log("hi");
}

// function call
sayHi();

// mostly used in objects
const myFunction = function() {
    console.log("Hello world!");
}

myFunction();

const laptop = {
    sayModel: function() {
        console.log("Lenovo");
    }
}

laptop.sayModel();

// arrow function
const arrowFunction = () => {
    console.log("Hello from arrow!");
}

arrowFunction();

function sayName() {
    return "Name!";
}

console.log(sayName());

// if we're returning a value in 1 line, the arrow function automatically returns the 1 value 
const sayNameArrow = () => "Name from arrow!";

console.log(sayNameArrow());

// parameters

//               parameters - are variables that is existing in a function
function sendAlert(firstName, lastName) {
    console.log(`Greetings, ${firstName} ${lastName}`);
}

// function call
// arguments
sendAlert("May", "Lee");

const printArray = (arraySample) => {
    console.log(arraySample);
}

const arraySample = [1,2,3,4];
printArray(arraySample);

// return statement - allows us to access values produced inside a function

function add(a, b) {
    // let sum = a + b;
    // return sum;
    return a + b;
}

console.log(add(20, 20));

// scope
function subtract(a, b) {
    // local variable
    let difference = a - b;
    return difference;
}

// global
let differenceValue = subtract(50, 25);
console.log(differenceValue);
// console.log(difference); // this will show an error saying that difference is not defined 
