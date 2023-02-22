// JS Type Conversion

// Convert Strings to Numbers
Number("Faysal"); // NaN
Number("3.14"); // 3.14
Number("   "); // 0
Number(""); // 0
Number("3 14"); // NaN

// Number() // Returns a Number
// parseFloat() // Can return floating point number like 3.5
// parseInt() // can return only integer number like 3

// NaN - Number Data Type

// Convert Numbers to Strings
String(123); // "123"
String(100 + 50); // "150"

// toString() method does the same thing.

// toFixed() // returns a rounded number string
// toPrecision(3) // 10.35 -- 10.4

// Dates to Numbers
Number(new Date()); // Number
// getTime() method does the same.

// Booleans to Strings

String(false); // "false"
String(true); // "true"
