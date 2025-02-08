// Given an array of positive integers arr[], return the second largest element from the array.
// If the second largest element doesn't exist then return -1.

function getSecondLargest(arr) {
  let n = arr.length;
  arr.sort((a, b) => a - b);
  for (let i = n - 1; i > 0; i--) {
    if (arr[i] !== arr[i - 1]) {
      return arr[i - 1];
    }
  }

  return -1;
}

let arr = [3, 1, 2, 5, 6, 7, 84, 34, 21, 90];

console.log(getSecondLargest(arr)); // Output: 84
