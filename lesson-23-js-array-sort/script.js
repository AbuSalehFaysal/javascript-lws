// JS Array Sort
const fruits = ["banana", "apple", "orange"];

// string sort
fruits.sort(); // return ["apple", "banana", "orange"];
fruits.sort().reverse(); // return ["orange", "banana", "apple"];

// numeric sort
// sort function sort values as string by default
const number = [10, 40, 15, 21, 100];
number.sort((a, b) => {
  return a - b;
}); // return [10, 15, 21, 40, 100]

number.sort((a, b) => {
  return b - a;
}); // return [100, 40, 21, 15, 10]

number.sort((a, b) => {
  return 0.5 - Math.random();
}); // return random order

// Min / Max
const ascendingNumericSort = number.sort((a, b) => {
  return a - b;
});

ascendingNumericSort[0]; // Min value 10
ascendingNumericSort[ascendingNumericSort.length - 1]; // Max value 100

// More efficient way to find Min / Max
const myArrayMax = (number) => {
  return Math.max.apply(null, number);
};

const myArrayMin = (number) => {
  return Math.min.apply(null, number);
};

myArrayMax(number); // Max 100
myArrayMin(number); // Max 10

const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

cars.sort((a, b) => {
  return a.year - b.year;
}); // ascending sorting based on year
