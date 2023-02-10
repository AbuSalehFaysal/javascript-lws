// Problem Solving

// Get a random number between two numbers (both inclusive)
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + 1) + min;
};
console.log(getRandomNumber(1, 6));

// order names alphabetically
const names = ["Abu", "Saleh", "Faysal"];
names.sort(); // return ["Abu", "Faysal", "Saleh"];

// order role numbers by ascending order
const rollNumers = [9, 1, 2, 56, 8];
rollNumers.sort((a, b) => {
  return a - b;
}); // return [1,2,8,9,56]

// order role numbers by descending order
rollNumers.sort((a, b) => {
  return b - a;
}); // return [56,9,8,2,1]

// leap year checker
const leapYearChecker = (year) => {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return true;
  }
}; // return true if leap year.
