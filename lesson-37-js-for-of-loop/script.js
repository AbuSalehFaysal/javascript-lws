// JS for of loop --- use it for an iterable(array, strings, Maps, NodeLists) object where order is important.

// object is not iterable because order is not important there.

let name = "Faysal";
for (let n of name) {
  // in returns the index
  // of returns the value
  console.log(n); // F, a, y, s, a, l
}
