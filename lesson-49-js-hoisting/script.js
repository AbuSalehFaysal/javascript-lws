// JS Hoisting -- Moving all declarations to the top

// In JS, variable can be declared after it has been used

x = 5; // assign

var x; // declare // initial undefined

// After ES6
y = 5;
let y; // reference error
// let hoisted to the top, but did not assign the undefined value. that is it cannot refer and browser shows the reference error.

z = 5;
const z; // syntax error

// JS only hoists declarations, not initializations

// We should declare all the variables at the top. 
// JS strict mode does not allow variables if they are not declared.
