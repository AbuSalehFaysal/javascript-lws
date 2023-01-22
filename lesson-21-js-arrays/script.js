// JS Arrays

// Array Syntax
const a = ["Abu", "Saleh", "Faysal"];

// array index starts from 0.

a[2]; // returns "Faysal" by accessing 2 index.

// arrays are object data type.

// array elements can be objects
const b = [
  {
    firstName: "Abu",
    lastName: "Faysal",
  },
  {
    firstName: "Abu 2",
    lastName: "Faysal 2",
  },
];

// we can store any type of data as array elements

// we can get the total number of array elements by using array.length.

a[a.length - 1]; // accessing the last array elements

// the safest way is to loop through an array is using a for loop.
for (let i = 0; i < a.length; i++) {
  const elem = a[i];
  console.log(elem); // return Abu, then Saleh, then Faysal
}
const aLen = a.length; // this is makes the performance better as for every iteration the system does not have to calculate the length again and again.
for (let i = 0; i < aLen; i++) {
  const elem = a[i];
  console.log(elem); // return Abu, then Saleh, then Faysal
}

// we can do the same thing using forEach method
const iteratingFunction = (val) => {
  console.log(val);
};
a.forEach(iteratingFunction);
// for array we should always use forEach method because it has a cleaner syntax.

// the easiest way to add new element in array is push method.
a.push("Abeer");
a[a.length] = "Abeer";

// Associative array
// JS does not support named indexes.
const associativeArray = [];
associativeArray["firstname"] = "Abu";
associativeArray["lastname"] = "Faysal";
console.log(associativeArray); // it will return an Object
console.log(associativeArray.length); // it will return an undefined

// Difference between Array and Object
// array uses numbered index --- array is one kind on object
// object uses named index

// when to use array and when to use objects
// if you want the element names as number, use array and when you want the element names as names, use object

Array.isArray(a); // this will return true and we can understand it is an array in spite of the object data type.
a instanceof Array; // return true. Same explanation as above.
