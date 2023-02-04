// JS Array Iteration
const numbers = [45, 4, 9, 16, 25];

// forEach method***
const forEachFunc = (value, index, array) => {
  console.log({
    value: value,
    index: index,
    array: array,
  });
};
numbers.forEach(forEachFunc);

// map Method***
const mapFunc = (value, index, array) => {
  return value * 2;
  // we must need to return something
  // does not change the original array
};
numbers.map(mapFunc);

// filter method***
const filterFunc = (value, index, array) => {
  return value > 15;
};
numbers.filter(filterFunc);

// reduce method***
const reduceFunc = (total, value, index, array) => {
  return total + value;
};
numbers.reduce(reduceFunc, 0);

// reduce right method --- same as reduce, just do the iteration from the end of the array.

// every method
const everyFunc = (value, index, array) => {
  return value > 18; // true or false, the logic needs to meet for every elements
};
numbers.every(everyFunc);

// some method
const someFunc = (value, index, array) => {
  return value > 18; // true or false, the logic needs to meet at least one element
};
numbers.some(someFunc);

// indexOf method
const fruits = ["Mango", "Apple"];
fruits.indexOf("Mango"); // return 0 index

// includes method
fruits.includes("Apple"); // return true

// find method***
const findFunc = (value, index, array) => {
  return value > 15; // returns the first element that meets the condition
};
numbers.find(filterFunc);

// findIndex method
const findIndexFunc = (value, index, array) => {
  return value > 15; // returns the first element's index that meets the condition
};
numbers.findIndex(findIndexFunc);

// Array from method
// from can be used in iterable(can iterate one by one) object like string.
let stringTest = "ABCDE";
Array.from(stringTest); // ["A", "B", "C", "D", "E"]

// Array Keys method
const keys = fruits.keys(); // return Array Iterator
