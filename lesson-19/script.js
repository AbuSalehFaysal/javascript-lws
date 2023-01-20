// JS Numbers

// Js has only one type of numbers. Numbers can be written with or without decimals

let x = 10e5; // exponential

// numbers are 64 bit and floating point number.

// js can read 15 digit integer number without any problem

// js can read 17 digit floating point number without any problem.

// floating point number is not always accurate.

// to solve the problem we need to multiply to get an integer number and divide.

// Numeric string act as a number for multiplication and division (in addition string will get priority).

// js uses + operator for both addition and concatenation.

// addition of string and number will always return a string.

// division and multiplication of number will always return a number.

// NaN - Not a number

// isNaN - returns true if the argument is not a number

// NaN is a number type data *** Interview

// number conversion
let decimal = 10;
// we convert number to another base number by using toString method
let num = decimal.toString(2); // returns "1010" Binary representation of 10

// Number can be Object as well
let a = 123; // type number
let b = new Number(123); // type object
