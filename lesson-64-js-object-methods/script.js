// JS Object Methods

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobby: "Sports",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
