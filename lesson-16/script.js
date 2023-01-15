// JS Strings Methods

let x = "John"; // literal syntax
let y = new Object("John"); // object syntax

// string length
console.log("String Length " + x.length);

// slice method

// slice extracts a part of sting and returns the extracted part in a new string.
let xSlice = x.slice(0, 2);
console.log("Slice " + xSlice); // Joh

let xReverseSlice = x.slice(-3, -2); // negative indexing => Jo

// substring

// substring is similar as slice, but you cannot use negative indexes.
let xSubstring = x.substring(1, 2); // returns oh

// substr
// in the second parameter of substr method will slice out the rest of the string.
let xSubstr = x.substr(1, 1); // oh

let name = "Abu Saleh Faysal";
let name2 = name.replace("Faysal", "Abeer"); // returns Abu Saleh Abeer

// replace method is case sensitive

// toUpperCase

let nameUpper = name.toUpperCase(); // returns ABU SALEH FAYSAL

// toLowerCase
let nameLower = name.toLowercase(); // returns abu saleh faysal

// concat

let abuSaleh = "Abu Saleh";
let faysal = "Faysal";
let abuSalehFaysal = abuSaleh.concat(" ", faysal); // returns Abu Saleh Faysal

// concat method can be used instead of " "+" " operator

// strings are immutable, which means strings cannot be changed, only replaced.

// trim
// we use trim method to remove unnnecessary spaces.
let b = "  John  ";
let trimStr = b.trim();

// padStart
let text = "5";
let textpadStart = text.padStart(4, 0); // 0005
let textpadEnd = text.padEnd(4, 0); // 5000

// extracting characters from a string using charAt
let char = name.charAt(0); // returns A

// extracting unicode value
let charUniCode = name.charCodeAt(0); // returns 65

// property access using []
console.log(name[0]); // returns "A"
// it treats strings like a array, but it behaves unpredictable sometimes.

// undefine is both a value and data types.

// convert a string to an array using split method;

let split = "Faysal";
let splitArray = split.split(""); // returns ["F", "a", "y", "s", "a", "l"]

let helloWorld = "Hello World!";
let splitHW = helloWorld.split(" "); // returns ["Hello", "World!"]
