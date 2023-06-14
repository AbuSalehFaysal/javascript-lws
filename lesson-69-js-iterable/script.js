// JS Iterables

// arrays
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

for (let n of numbers) {
  console.log(n);
}

// objects
const person = {
  name: "Abu Saleh Faysal",
  age: "25",
};
// we cannot iterate a object because objects prototype does not have a prototype like symbol.iterator

// we can iterate the object by using the below way
person[Symbol.iterator] = function () {
  let n = 0;

  return {
    next() {
      n += 10;
      if (n === 100) {
        done = true;
      }
      return {
        value: n,
        done: done,
      };
    },
  };
};

for (let p of person) {
  console.log(p);
}
