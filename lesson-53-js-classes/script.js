// JS Classes

// introduced after ES6/ES2015

// class is kind of a template or structure of a object

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  carName() {
    console.log(this.name);
  }
}

const car1 = new Car("Toyota", 2011);
console.log(car1);
const car2 = new Car("BMW", 2013);
const car3 = new Car("Tata", 2005);
