// JS Number Methods

// Numbers are primitive values like strings. Primitive values cannot have properties like object.

// toString method
// toString method returns a number as a string.
let a = 10;
let b = a.toString(); // type string;

// toExponential
let c = 9.656;
c.toExponential(2); // returns 9.66e+0

// toFixed
let d = 10.0;
d.toFixed(2); // returns 10.00

// toPrecision
let f = 9.656;
f.toPrecision(2); // 9.7 as a string

// valueOf
let g = new Number(125);
g.valueOf(); // returns 125 from g as a number

// There are three ways to convert variables to number
// 1. Number()
// 2. parseInt()
// 3. parseFloat()

// Number()
Number(true); // returns 1 as a number
Number(true); // returns 0 as a number
Number("10"); // returns 10 as a number

// Number method can be used on date as well. It returns milliseconds.

// parseInt() are same as Number() but it always returns an integer value.

parseInt("10.33"); // returns 10 as a number.

// parseFloat() takes a string and returns a number.

// NUMBER PROPERTIES
// MAX_VALUE returns the highest number
// MIN_VALUE returns the highest number
// POSITIVE_INFINITY returns the infinity
// NEGATIVE_INFINITY returns the -infinity

// Number Properties cannot be used on numbers.
