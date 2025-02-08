// You are given an array of integers arr[]. Your task is to reverse the given array.

// Note: Modify the array in place.

// Method 1
function reverseArray(arr) {
 return arr.reverse();
}

// Method 2

function reverseArray(arr) {
 let res = [];
 for (let i = arr.length - 1; i >= 0; i--){
  res.push(arr[i]);
 }
 return res;
}


let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 1, 23, 4];
console.log(reverseArray(arr));
