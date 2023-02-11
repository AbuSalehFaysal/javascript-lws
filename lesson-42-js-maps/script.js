// JS Maps

// Map holds key-value pairs where keys can be any datatype where in object the keys are always string.

const map = new Map();

map.set("name1", "Abu"); // key: name1 , value: Abu
map.set("name2", "Saleh"); // key: name2 , value: Saleh
map.set("name3", "Faysal"); // key: name3 , value: Faysal

map.size(); // return the number of element

map.delete("name3"); // removes that element

map.has("name2"); // return true

for (const x of map.entries()) {
  console.log(x); // name1, Abu, name2, Saleh
}
