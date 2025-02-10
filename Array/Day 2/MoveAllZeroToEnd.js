// You are given an array arr[] of non-negative integers.
// Your task is to move all the zeros in the array to the
// right end while maintaining the relative order of the
// non-zero elements. The operation must be performed in
// place, meaning you should not use extra space for
// another array.

// function moveZerosToEnd(arr) {
//   arr.sort((a, b) => a - b);
//   console.log(arr);

//   let zeros = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       zeros.push(arr[i]);
//       arr.splice(i, 1);
//       i--;
//     }
//   }
//   return arr.concat(zeros);
// }

// let arr = [0, 1, 0, 3, 12];

// console.log(moveZerosToEnd(arr));


console.log([]==false);
