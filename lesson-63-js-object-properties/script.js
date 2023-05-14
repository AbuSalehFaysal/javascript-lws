// JS Object Properties

const person = {
  name: "faysal", // object property
  age: 25, // object property
};

// We can dynamically add properties:
person.country = "Bangladesh";

// properties order is not important in object

// we can access properties by using
// dot notation
person.age;
person["age"]; // use this syntax for dynamic value property

// for in loop is used for accessing object property
let text = "";
for (let x in person) {
  text += person[x];
}

// delete properties
delete person.name; // {age: 25}

// nested object
const nestedObject = {
  name: "faysal",
  nestedName: {
    fullName: "Abu Saleh Faysal",
  },
};

// Object is a name, value pair
