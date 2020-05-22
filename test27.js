const pivot = (arr, start = 0, end = arr.length + 1) => {
  //swap helpfer fun
  const swap = (arr, indx1, indx2) => {
    [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
  };
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
};

pivot([4, 8, 2, 1, 5, 7, 6, 3]);
//3

const quicksort = (arr, letf = 0, right = arr.length - 1) => {
  let pivotIndex = pivot(arr);

  //left
  quicksort(arr, left, pivotIndex - 1);
  //right
  quicksort(arr, pivotIndex + 1, rigth);
};
