/*
Binary Search
*/

const binarySearch = (arr, val) => {
  let L = 0;
  let R = arr.length - 1;
  let M = Math.floor((L + R) / 2);
  while (arr[M] !== val && L <= R) {
    console.log(L, M, R);
    if (arr[M] > val) {
      R = M - 1;
    } else {
      L = M + 1;
    }
    M = Math.floor((L + R) / 2);
  }
  if (arr[M] === val) return M;
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 8));

// [1, 2, 3, 4, 5, 6, 7, 8]
// L         M        V  R
