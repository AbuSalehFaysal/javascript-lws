// JS Object accessors (getters and setters)

// it is introduce in ES5(2009)

const person = {
  name: "John",
  language: "en",
  get lang() {
    // getter
    return this.language;
  },
};

const person2 = {
  name: "Faysal",
  language: "",
  set lang(lang) {
    // setter
    this.language = lang;
  },
};

person.lang = "bn";

// getter and setter are more efficient that function because it does not take the whole object body and the property only works when we call it
