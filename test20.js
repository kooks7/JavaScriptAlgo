/*
nestedEvenSum
Write a recursive function called nestedEvenSum. Return the sum
of all even numbers in an object which may contain nested objects.
*/

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup'
    }
  }
};
//   nestedEvenSum(obj1); 6

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' }
};

// nestedEvenSum(obj2); 10

const nestedEvenSum = obj => {
  let sum = 0;
  //   console.log(obj);
  for (let v in obj) {
    if (typeof obj[v] === 'object') {
      sum = sum + nestedEvenSum(obj[v]);
    } else if (typeof obj[v] === 'number') {
      if (obj[v] % 2 === 0) {
        sum = sum + obj[v];
      }
    }
  }
  return sum;
};

const obj3 = {
  a: 123,
  b: 456
};

console.log(nestedEvenSum(obj1));
// for (let key in obj3) {
//   console.log(obj3[key]);
// }
// console.log(typeof obj3);
