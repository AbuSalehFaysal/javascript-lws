// Regular Expressions

// a sequence of characters that forms a search pattern

// Syntax - /pattern/modifiersOrFlag

// In JS, regular expression are often used in two string methods: search() and replace()

let name2 = "Abu Saleh Faysal";
name2.search("Faysal"); // 10
name2.search(/faysal/i); // 10

name2.replace("Faysal", "Abeer"); // Abu Saleh Abeer
name2.replace(/faysal/i, "Abeer"); // Abu Saleh Abeer

// flags - i - case insensitive, g - global (all the matched pattern in a single line), m - multiline(all the lines)

/a/.test("faysal"); // true
