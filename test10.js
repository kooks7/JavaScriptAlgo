/* power
Write a function called power which accepts a base and an exponent.
 The function should return the power of the base to the exponent. 
 This function should mimic the functionality of Math.pow()  
 - do not worry about negative bases and exponents.
 */

const power = (x, n) => {
  if (n === 0) return 1;
  if (n === 1) return x;
  return x * power(x, n - 1);
};

console.log(power(2, 0));
