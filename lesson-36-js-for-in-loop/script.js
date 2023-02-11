// JS for in loop --- for object iteration

const person = {
  fname: "Abu Saleh",
  lname: "Faysal",
  age: 25,
};

for (let x in person) {
  console.log(x); // Abu Saleh then Faysal then 25
  console.log(person[x]); // Abu Saleh then Faysal then 25
}

// we can also use this in array, but we should not use it if the index order is important.
const arr = [10, 15, 7, 45, 3];
for (let n in arr) {
  console.log(n); // 0, 1, 2, 3, 4
  console.log(arr[n]); // 10, 15, 7, 45, 3
}
