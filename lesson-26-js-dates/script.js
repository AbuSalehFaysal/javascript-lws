// JS Dates
// Date objects are created with the new Date() constructor

// the function which helps to create an object is called the constructor

// there are 4 ways to create a new date object
new Date();
new Date(year, month, day, hours, minutes, seconds, milliseconds);
new Date(milliseconds);
new Date(dateString);

// new Date
const d = new Date(); // for date the new syntax is important

// new Date(year, month, day, hours, minutes, seconds, milliseconds);
const d2 = new Date(2018, 11, 2, 14, 55, 10); // here 11 means december, because js counts months from 0 index.
// using this syntax, you must use at least two parameters which is year and month.

// if you use one parameter, it will think it as milliseconds

// for 1998, October
new Date(98, 9);

// js Date count start from 1970.

// UTC standard format
d.toUTCString(); // Tue, 10 Aug 2021 21:21:51 GMT

// toDateString - more readable format
d.toDateString(); // Wed Aug 11 2021

// ISO Formate
d.toISOString(); // in this formate, date stores in the database
