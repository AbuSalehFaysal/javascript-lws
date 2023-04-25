// JS Performance

const array = [1, 2, 3];
const arrayLenth = array.length;

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  console.log(element);
}

// Best Practice and improved time consumption
for (let i = 0; i < arrayLenth; i++) {
  const element = array[i];
  console.log(element);
}

// Keep the number of dom element size small, this will take less time to load the page

// avoid unnecessary variables

// put the script src at the end of the HTML markup

// there is another way to do that even we put the script src at the initial portion, but in that case we need to use the defer attribute and set its value as true

// avoid use with keyword
