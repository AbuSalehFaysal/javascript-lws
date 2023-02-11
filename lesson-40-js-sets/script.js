// JS Sets

// sets are collection of unique values(just like array, just the only difference is, array is collection of values)

let x = "e";

const set = new Set(["a", "b", "c"]);
set.add("d"); // just like array push --- ["a", "b", "c", "d"]
set.add(x); // ["a", "b", "c", "d", "e"]

set.forEach((value) => {
  console.log(value); // ["a", "b", "c", "d", "e"]
});

set.values(); // setIterator Object {"a", "b", "c", "d", "e"} --- we can use for of to iterate this object.
