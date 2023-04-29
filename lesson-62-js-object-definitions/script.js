// JS Object Definitions

// In JS, objects are kings. If you understand object, you understand js.

// In js, almost everything is an object

// primitive value is a value that no properties or methods.

// there are 5 primitive data type
// 1. string
// 2. number
// 3. boolean
// 4. null
// 5. undefined

// primitive values are immutable. (hardcoded)

// objects are mutable (can change the properties of an object, not the whole thing)

// it is better to declare an object using const.

// 4 ways to create a js object

// 1. literal syntax
const literalObject = {
  name: "literalObject",
  age: 50,
};

// 2. empty obj
const emptyObj = {};
emptyObj.name = "faysal";
emptyObj.age = 25;

// 3. new syntax // should avoid this
const newObj = new Object();
newObj.name = "faysal";
newObj.age = 25;

// 4. const assign new obj to an existing obj
const anotherObj = newObj;
