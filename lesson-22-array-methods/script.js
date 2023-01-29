// Array Methods

// 1. Converting array to strings --- toString()
let names = ["Abu", "Saleh", "Faysal"];
names.toString(); // will return Abu, Saleh, Faysal

// 2. Joining Array using what - join()
names.join("*"); // will return Abu * Saleh * Faysal

// 3. Remove element from last - pop()
names.pop(); // will return "Faysal"

// 4. Add element in the last - push()
names.push("Abeer"); // return the array length 4

// 5. Remove element from the first - shift()
names.shift(); // will return "Abu"

// 6. Add element in the first - unshift()
names.unshift("Abeer"); // will return the new length 4

// 7. we can access the elements by array index
names[1]; // return "Saleh"

// 8. element delete - delete()
delete names[1]; // return true
names; // ["Abu", empty, "Faysal"]; // using delete may leaves undefined holes in array. So we should not use this.

// 9. Splice method can be used to add elements in the array anywhere we want
names.splice(3, 1, "Kabbo"); // ["Abu", "Saleh", "Kabbo"]
names.splice(0, 1); // ["Saleh", "Faysal"] // without leaving a hole you can remove element from the array using splice.

// 10. Concat method merge two arrays together
let name1 = ["Abu", "Saleh"];
let name2 = ["Faysal"];
let bothName = name1.concat(name2); // ["Abu", "Saleh", "Faysal"];

// 11. Slice a piece of an array using slice
names.slice(0, 2); // ["Abu"]
// slice creates a new array. It doesn't change the original array.
