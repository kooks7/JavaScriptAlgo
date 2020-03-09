/* reverse
Write a recursive function called reverse which accepts a string and returns a new string in reverse.
*/
const reverse = str => {
  //base case

  if (str.length === 0) {
    return str;
  }
  return reverse(str.slice(1)) + str[0];
};
console.log(reverse('abcd'));

// const str = 'abc';
// console.log(str.slice(1));
// console.log('abc');
