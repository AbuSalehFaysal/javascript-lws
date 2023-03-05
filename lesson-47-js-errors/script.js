// JS errors

// try, catch, throw, finally

try {
  // regular code
} catch (error) {
  console.log(error.message);
}

// when an error occurs, js creates an error object with two properties: name, message.

// we can create owr own error according to our logic. We use throw in this case.

let name = "Abeer";

try {
  if (name === "Abeer") {
    throw {
      name: "nameError",
      message: "It should be Faysal!",
    };
  }
} catch (error) {
  console.log(error.message);
} finally {
  name = "Faysal";
}
