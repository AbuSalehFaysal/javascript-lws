// Function Definitions

// function declarations
function funcName() {
  console.log("functions declarations, but not called yet!");
}

// execute functions
funcName();

// function in a variable
const funcVar = function anotherFunc() {
  console.log("Function in a variable!");
};

// normally function is hoisted just like other var, but if we store it inside a variable as function expression, the hoisting will not work.

// call a function by the function itself - self invoking function --- IIFE --- Immediately Invoked Function Expression
(function call() {
  console.log();
})();

// function returning something
function funcAsVar() {
  return "I am a function as Var!";
}

const funcReturn = funcAsVar();

// Functions are objects

// Arrow Functions

const arrowFunc = () => {
  console.log("Arrow Function");
};

const multiply = (x, y) => x * y;

// Arrow functions does not have this keyword
// Arrow functions does not compatible with hoisting

// while using arrow functions we should use const, because function expressions are always constant value
