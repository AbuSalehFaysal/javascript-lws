// JS Prototype

// Constructor
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

const faysal = new Person("Abu Saleh", "Faysal", 25);

Person.prototype.country = "Bangladesh";

console.dir(Person);

console.log(faysal.country); // Bangladesh

// we should not change the js built in prototype
