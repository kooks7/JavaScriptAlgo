const insertionSort = arr => {
  let j;
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      console.log(arr);
    }
    arr[j + 1] = currentVal;
  }
  s;

  return arr;
};

insertionSort([2, 1, 9, 76, 4]);
// 1, 2, 9, 76, 4
