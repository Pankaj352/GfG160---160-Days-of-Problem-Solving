// Given an array of integers arr[] of size n,
// the task is to rotate the array elements
// to the left by d positions.

function rotateArray(arr, d) {
  let n = arr.length;
  // Calculate the effective number of positions to rotate
  d %= n;
  //reverse the first d elements
  reverseArray(arr, 0, d - 1);
  //reverse the remaining n-d elements
  reverseArray(arr, d, n - 1);
  //reverse the whole array to get the final result
  reverseArray(arr, 0, n - 1);
}

function reverseArray(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

let arr = [1, 2, 3, 4, 5];
let d = 2;
rotateArray(arr, d);

console.log(arr.join(" "));
