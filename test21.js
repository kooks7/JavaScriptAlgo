/*capitalizeWords
Write a recursive function called capitalizeWords. Given an array 
of words, return a new array containing each word capitalized.
*/
// add whatever parameters you deem necessary - good luck!
// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

const capitalizeWords = arg => {
  if (arg.length === 0) {
    return arg;
  }
  let newArr = [];

  let temp = arg[0].toUpperCase();

  newArr.push(temp);
  return newArr.concat(capitalizeWords(arg.slice(1)));
};
// console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']));

const arr = ['abc', 'def'];
console.log(arr[0].toUpperCase());
console.log(arr);
