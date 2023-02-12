// JS Type of operator

// in js there are 5 different datatypes that can contain values
// String, number, boolean, object, function

// there are 6 types of objects
// Object, Date, Array, String, Number, Boolean

// Two datatypes that cannot contain values
// null, undefined

let name = "Abu Saleh Faysal";
console.log(typeof name); // string

typeof "Faysal"; // string
typeof 3.14; // number
typeof NaN; // number
typeof false; // boolean
typeof [1, 2, 3]; // object
typeof { name: "Faysal" }; // object
typeof new Number(4); // object
typeof new Date(); // object
typeof function () {}; // function
typeof myCar; // undefined
typeof null; // object

// you cannot check array or date by using typeof, because it is always return object type

// primitive data is a single data value with no properties and methods

// typeof operator can return one of these primitive type
// string, number, boolean, undefined

// object, array, null ----- Object
// function --- function

// the function which creates something is called constructor

"Faysal".constructor // function String()
3.14.constructor // function Number()
false.constructor // function Boolean()
[1,2].constructor // function Array()
{name: "abc", age: 25}.constructor // function Object()
new Date().constructor // function Date()
function abc(){}.constructor // function Function()


const isArray = (myArray) => {
    return myArray.constructor === Array;
}
console.log(isArray([1,2,3])); // true

// we can empty an object or array by simple storing undefined or null.
