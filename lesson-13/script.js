// JS Object

const car = {
  name: "BMW",
  year: 2018,
  price: 10000,
  color: "black",
  isSold: false,
  start: function () {
    console.log(this.color + this.name);
  },
};

// Objects are variables too, which can store different types of data together.

// We should use const while declaring objects or array.

console.log(car.color);
console.log(car["name"]);
// way of accessing object data

car.start();

car.start; // if we access a method without a parenthesis, it will return the function definition.

// function inside an object is called a method.
// a method is function stored as a property.

let x = 5; // literal syntax
let y = new Number(5); // object syntax, it complicates the code and slow down execution process.
