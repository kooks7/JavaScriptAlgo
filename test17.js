/*
someRecursive
Write a recursive function called someRecursive which accepts an array and a callback. 
The function returns true if a single value in the array returns true when passed to the callback. 
Otherwise it returns false.
*/

const someRecursive = (arr, fun) => {
  if (arr.length === 0) return true;
  if (!fun(arr[0])) return false;
  return arr.slice(1);
};

console.log(someRecursive([4, 6, 8], val => val < 10));
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(1));
