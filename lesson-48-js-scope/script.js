// JS Scope

// Block Scope, Functional Scope, Global Scope

// before es6, js only had global scope and function scope, after es6 js introduced let and const keywords provide block scope in js.
{
  let x = 2;
}
// x cannot be used here

// var, let, const are quite similar inside a function // function scope

// a variable declare outside a function, acts like global scope

function accidentalGlobalVariable() {
  carName = "BMW"; // carName becomes accidental global variable as you didn't declare any var, let, const
}

// global variables are store in window object
var name1 = "Abu";
var name2 = "Saleh";
var name3 = "Faysal";

console.dir(window); // you will find every global variables here, but not the local variables (let, const)

// Do not create global variables unless you intend to
