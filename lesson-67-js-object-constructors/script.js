// JS Object Constructors

const person = {
  firstName: "Abu Saleh",
  lastName: "Faysal",
  age: 25,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// Constructor - Naming convention Capital

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

const faysal = new Person("Abu", "Saleh", 25);

// we use constructor i reuse same code.
