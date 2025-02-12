// Given an array arr[] of size n, the task is to print the
// lexicographically next greater permutation of the given array.
// If there does not exist any greater permutation, then find the
// lexicographically smallest permutation of the given array.

function nextPermutation(arr) {
  let n = arr.length;
  let i, j;
  //find the rightmost index `i` where arr[i] < arr[i + 1]
  for (i = n - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      break;
    }
  }
  if (i >= 0) { // if i is found
    // find the rightmost `j` where arr[j] > arr[i]
    for (j = n - 1; j > i; j--) {
      if (arr[j] > arr[i]) {
        break;
      }
    }
    // swap arr[i] and arr[j]
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  // reverse the portion of the array after index `i`
  for (let left = i + 1, right = n - 1; left < right; left++, right--) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
  }
  return arr;
}
// Test the function
let arr = [1, 2, 3];
console.log(nextPermutation(arr));
