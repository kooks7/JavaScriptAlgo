/*
isPalindrome
Write a recursive function called isPalindrome which returns true 
if the string passed to it is a palindrome (reads the same forward and backward). 
Otherwise it returns false.
*/

// 1번 솔루션
const isPalindrome1 = str => {
  let reverStr;
  const reverse = str => {
    //base case

    if (str.length === 0) {
      return str;
    }
    return reverse(str.slice(1)) + str[0];
  };

  reverStr = reverse(str);

  if (reverStr === str) {
    return true;
  } else {
    return false;
  }
};

const isPalindrome2 = str => {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) {
    return isPalindrome2(str.slice(1, -1));
  }
  return false;
};

console.log(isPalindrome2('abcddcba'));
