// JS String search

// indexOf()

let str = "Hello World World";
str.indexOf("World"); // returns 6

// indexOf is case sensitive

// lastIndexOf()
str.lastIndexOf("World"); // returns 12

// search()

str.search("World"); // returns 6

// the difference between indexOf and search is that search method cannot take a second parameter.

// match

str.match(/rld/g) // returns ["rld", "rld"]

// includes

str.includes("World"); // returns true

str.startsWith("Hello"); // returns true
str.endsWith("Hello"); // returns false
