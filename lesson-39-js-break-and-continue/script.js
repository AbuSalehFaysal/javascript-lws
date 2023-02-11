// JS - break and continue

// break use to get out from the loop

// continue use to get out from the iteration and go to the next iteration to continue the loop

const array = [20, 10, 30];

for (let i = 0; i < array.length; i++) {
  if (arr[i] === 10) {
    break;
  }
  console.log(arr[i]); // 20
}

for (let i = 0; i < array.length; i++) {
  if (arr[i] === 10) {
    continue;
  }
  console.log(arr[i]); // 20, 30
}
