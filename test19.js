/*capitalizeFirst
Write a recursive function called capitalizeFirst. Given an array of strings,
 capitalize the first letter of each string in the array.
*/
const capitalizeFirst = arr => {
  let str = arr[0];
  let newArr = [];
  str = str[0].toUpperCase() + str.slice(1);
  newArr.push(str);
  if (arr.slice(1).length === 0) {
    return newArr;
  }
  return newArr.concat(capitalizeFirst(arr.slice(1)));
};

console.log(capitalizeFirst(['abc', 'def', 'kim']));
// const str = 'abcd';
// console.log(str[0].toUpperCase() + str.slice(1));
