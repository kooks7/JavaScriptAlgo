/* 
flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
flatten([[1],[2],[3]]) // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
*/

const flatten = arr => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      newArr.push(arr[i]);
    } else {
      newArr = newArr.concat(flatten(arr[i]));
    }
  }
  return newArr;
};

console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
// let arr = [1, 2, [[3, 4]]];
// let newArr = [1];
// newArr = newArr.concat(arr[2]);
// console.log(newArr);
