// JS Object Display

const person = {
  name: "John",
  age: 30,
  hobbies: ["Sports", "Cooking", "Reading"],
};

// in html, it will print [object object]

// but it can show the object property

for (let x in person) {
  console.log(person[x]);
}

Object.values(person); // it will return an array

// Object to JSON string format
JSON.stringify(person); // will return a json string, but it will not stringify a method(function property)
