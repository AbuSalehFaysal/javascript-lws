// Let Keyword

// 1. Let cannot cannot be redeclared anywhere.

// 2. let provide block scope{}. Before ES6(2015), JS had only global and function scope.

// 3. let variables declared inside a block cannot be accessed outside the block.

// We should not use var inside a block.

// var variables can be hoisted to the top and set a default value as undefined.
myname = "Faysal";
var myname;
console.log(myname);
// The above code does not show any error because JS take a glance all the codes before executing, and identify the variable declarations and hoisted them to the top and initial an undefined default value.

// let variables can be hoisted as well but it does not initial a default value as undefined unlike var variables.
