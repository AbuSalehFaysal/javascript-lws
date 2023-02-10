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
  } else {
    return false;
  }
}; // return true if leap year.

// vowel counter
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
const sentence = "My name is Abu Saleh Faysal";
const vowelCounter = (sentence) => {
  let count = 0;
  const arr = Array.from(sentence);
  arr.forEach((value) => {
    if (vowels.includes(value)) {
      count++;
    }
  });
  return count;
}; // return total number of vowel.

// find duplicate number from an array
const duplicateNumberArray = [1, 4, 5, 5, 7, 6, 10, 1, 9, 10, 4];
const duplicates = duplicateNumberArray.filter((value, index, arr) => {
  return arr.indexOf(value) !== index;
});
