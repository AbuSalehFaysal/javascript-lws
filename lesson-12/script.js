// JS Function

// a block of code designed to perform a particular task. 

function sum (a, b) {
    return a+b;
}

// sum is the name of the function, a and b are the two parameters. 

sum(5,10);
// 5 and 10 under the parenthesis are called the arguments.
// inside a function, the arguments behaves as variables.

// This is how we can call or invoke a function. 
// We can call or invoke a function multiple times.

// inside a function, after return statement, the function will stop executing.

// If a programmer forget to return something from a function, the function returns undefined by default. 

// variable declared inside a function, become LOCAL to the function. 

// variables contain same name can be used in different functions.

function one() {
    let one = 1;
}

function oneMore() {
    let one = 56;
}