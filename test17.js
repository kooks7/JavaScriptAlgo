/*
someRecursive
Write a recursive function called someRecursive which accepts an array and a callback. 
The function returns true if a single value in the array returns true when passed to the callback. 
Otherwise it returns false.
*/

const someRecursive = (arr, fun) => {
  if (arr.length === 0) return true;
  if (!fun(arr[0])) return false;
  return someRecursive(arr.slice(1), fun);
};
const isOdd = val => val % 2 !== 0;
console.log(someRecursive([1, 3, 6, 1], isOdd));
// const arr = [1];
// console.log(arr.slice(1));
