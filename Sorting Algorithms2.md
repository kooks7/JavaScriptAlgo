# Sorting Algorithms2

#### Objectives

* 이전에 배웠던 알고리즘의 한계를 이해
* **merge sort** 구현
* **quick sort** 구현
* **radix sort** 구현

## Why Learn this?

* 빠른 Sort 알고리즘이다!
  * 시간 복잡도를 `O(n^2)`에서 `O(n log n)` 까지 줄일 수 있습니다.
  * 간략삼과 효율성 사이에는 상반 관계가 있습니다.
  * 빠른 알고리즘은 상당히 효율적인 반면에 매우 복잡합니다. 따라서 이해하는데 시간이 걸립니다.

#### 그래도 배워보자!

# 1. Merge Sort

#### 개념

* 쪼개고, 합치고, 정렬하자!
* 배열을 0 또는 1 요소의 더 작은 배열로 분해한 다음 새로운 배열에 정렬하는작업

#### 작동 방식

```javascript
[8, 3, 5, 4, 7, 6, 1, 2]

// 1. 쪼개기
[8, 3, 5, 4]   [7, 6, 1, 2]

// 2. 또 쪼개기
[8, 3] [5, 4]  [7, 6] [1, 2]

// 3. 또 쪼개기
[8] [3]  [5] [4]  [7] [6]  [1] [2]

// 4. 합치면서 작은게 앞으로 큰게 뒤로
[3, 8] [4, 5]  [6, 7] [1, 2]

// 5. 합치 면서 작은게 앞으로
[3, 4, 5, 8]  [1, 2, 6, 7]

// 6. 마지막
[1, 2, 3, 4, 5, 6, 7, 8]
```

#### merge 함수 의사코드

1. 빈 배열을 만들고 가장 작은 값을 각 배열에 넣습니다.
2. `while` 우리가 찾는 값이 없을 떄 까지 실행합니다.
   * `if`첫번째 배열의 첫번쨰 요소가 두번째 배열의 첫번쨰 값보다 작으면, 첫번쨰 배열의 첫번쨰 값을 `result`에 넣고 첫번째 배열의 그 다음 요소로 이동합니다.
   * `if` 첫번째 배열 값이 더 크다면, 두번째 배열의 값을 `result`에 넣고 두번째 배열의 다음 요소로 이동합니다.
   * 한 배열이 다 끝나면 다른 배열의 나머지 값을 넣습니다.

* example

  ```javascript
  merge([1, 10, 50], [2, 14, 99, 100])
  
  // 1
  [1,10,50] [2,14,99,100]
  
  // 2
  [1] - [1, 2] - [1,2,14] - [1,2,10,14,50] 
  
  // 3. 첫번째 배열이 끝났음으로 두번째 값을 다 넣는다.
  [1,2,10,14,50,99,100]
  ```

* **merge** 함수 구현하기

  ```javascript
  const merge = (arr1, arr2) => {
    const res = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length || j < arr2.length) {
      if (arr1[i] <= arr2[j] || arr2[j] == undefined) {
        res.push(arr1[i]);
        i++;
      } else if (arr1[i] > arr2[j] || arr1[i] == undefined) {
        res.push(arr2[j]);
        j++;
      }
    }
    return res;
  };
  ```

  

#### mergeSort 의사코드

1. 배열을 계속해서 쪼갠후 하나 또는 빈 배열이 될 때 까지 합니다. (slice 함수 사용해서 반으로 쪼갭니다. 재귀를 사용합시다.)
2. 다 쪼갠후에 위에서 구현한 merge 함수를 이용해서 모든 배열을 합칩니다.
3. 합친 함수를 리턴합시다.

#### merge Sort 구현

```javascript
// 합치는 함수
const merge = (arr1, arr2) => {
  const res = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] <= arr2[j] || arr2[j] == undefined) {
      res.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j] || arr1[i] == undefined) {
      res.push(arr2[j]);
      j++;
    }
  }
  return res;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.round(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};
```



#### Big O of mergeSort

| Best         | Average      | Worst        | Space Complexity |
| ------------ | ------------ | ------------ | ---------------- |
| `O(n log n)` | `O(n log n)` | `O(n log n)` | `O(n)`           |

 

# 2. Quick Sort

#### 개념

* merge sort와 같이 쪼개자
* 하나의 요소를 선택하고(pivot 이라함), pivot을 배열 어디에 넣을지 찾기
* 또 다른 요소를 찾아서 반복합니다.

#### merge 함수 의사코드

1. 빈 배열을 만들고 가장 작은 값을 각 배열에 넣습니다.
2. `while` 우리가 찾는 값이 없을 떄 까지 실행합니다.
   - `if`첫번째 배열의 첫번쨰 요소가 두번째 배열의 첫번쨰 값보다 작으면, 첫번쨰 배열의 첫번쨰 값을 `result`에 넣고 첫번째 배열의 그 다음 요소로 이동합니다.
   - `if` 첫번째 배열 값이 더 크다면, 두번째 배열의 값을 `result`에 넣고 두번째 배열의 다음 요소로 이동합니다.
   - 한 배열이 다 끝나면 다른 배열의 나머지 값을 넣습니다.

#### Pivot Helper

* Quick sort의 빠르기는 어떤 것을 Pivot으로 고를 것인가에 따라 결정납니다.
* 이상적으로, 정렬하고자 하는 배열 중앙을 Pivot으로 결정해야 합니다.
* 하지만 우리는 구현을 간결하게 하기 위해서 처음 요소를 Pivot으로 결정하겠습니다!

### 중요한 것은 Pivot 왼쪽에는 그 수보다 작은 숫자, 오른쪽은 큰 숫자가 있기만 하면 됩니다.



#### Pivot 의사코드

1. 인자는 세개로 받습니다. (배열, 시작 index, 끝 index)
2.  처음 pivot을 배열의 시작이라고 합시다.
3. 현재 pivot index를 variable에 담습니다. ( pivot이 어디에서 끝났는지 체크하기 위해서 )
4. `Loop` 처음부터 끝까지 
   * 어렵다.. 직접 구현해보자

#### pivot 구현

* 목표는 첫번 째, pivot을 올바른 위치에 둡니다.
  두번 째, pivot 왼쪽에는 pivot보다 작은 수를, 오른쪽에는 큰수를 둡니다.

```javascript
const pivot = (arr, start = 0, end = arr.length - 1) => {
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
  // pivot으로 고른 숫자 올바른 위치로 보내기
  swap(arr, start, swapIdx);
  return swapIdx;
};
```



#### Quicksort 전체 의사코드

1. pivot helper를 부릅니다.
2. pivot 함수가 pivot index를 리턴하면 재귀적으로 왼쪽과 오른쪽을 다시 pivot 함수로 정렬합니다.
   * Basic case는 리턴 배열이 2개 이하일 때 입니다.

#### 구현

```javascript
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  //basic case
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, rigth);
  }

  return arr;
};

quickSort([4, 6, 9, 1, 2, 5, 3]);

```

#### 전체 코드

```javascript
const pivot = (arr, start = 0, end = arr.length - 1) => {
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
  // pivot으로 고른 숫자 올바른 위치로 보내기
  swap(arr, start, swapIdx);
  return swapIdx;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  //basic case
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
};

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));

```







