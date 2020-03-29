/* 
make Linear Search
*/

const linearSearch = (arr, value) => {
  let index;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      index = i;
    }
  }
  if (index) {
    return index;
  } else if (index === arr.length) {
    return -1;
  }
};

// console.log;
console.log(linearSearch([1, 2, 3, 4], 3));
