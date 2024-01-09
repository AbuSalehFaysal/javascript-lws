const sum = (a, b) => {
  return a + b;
};

// Here a, b are the parameters

sum(2, 3); // here 2, 3 are the arguments

// js arguments does not check type of arguments

// if a argument is expected but missing, then js takes the argument as undefined

const sum2 = (a = 5, b = 5) => {
  // here 5,5 are the default values to avoid any undefined problem
  return a + b;
};

// primitive arguments are passed by values, not reference or any other things
// objects are passed by reference
