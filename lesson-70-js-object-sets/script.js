// JS Sets

// Set is js data type

// difference between array and set is, in sets a value can only occurs once.

// how to create a set
const letters = new Set(["a", "b", "c"]);

// methods
const emptySet = new Set();
emptySet.add("e");
letters.values(); // we can iterate this
letters.entries(); // returns key, value pair, in this case it will return value, value pair

// typeOf will return object type
letters instanceof Set; // true - Set, false - not set
