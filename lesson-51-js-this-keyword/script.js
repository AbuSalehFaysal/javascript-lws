// JS this keyword

const person = {
  firstName: "Abu Saleh",
  lastName: "Faysal",
  fullName: function () {
    return this.firstName, " ", this.lastName; // the firstName and lastName belongs to this person object, so we don't have to use person.firstName or person.lastName. Instead, we can use use this keyword.
  },
};

// this keyword refers to the object it belongs to

// Formula
// 1. this refers to the owner object
// 2. this refers to the global object.
// 3. in a function, this refers to a global object.
// 4. in a strict mode, this refers to global(alone), and this refers to undefined(inside function).
// 5. in an event, this refers to the element that received the event.
// 6. methods like call and apply can refer this to any object
