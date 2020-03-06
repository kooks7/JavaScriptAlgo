/*
function minSubArrayLen(nums, target) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // 현재 창이 주어진 타겟보다 작으면 창을 한칸 오른쪽으로 이동
    if (total < target && end < nums.length) {
      total += nums[end];
      end++;
    }
    // 창이 타겟을 넘으면 창을 축소
    else if (total >= target) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // 존재 안하면 나가기
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}



Sliding Window - minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or
equal to the integer passed to the function. If there isn't one, return 0 instead.
Examples:

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0 */

const abc = (arr, target) => {
  // 다시 풀기
};

console.log(abc([1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1], 9));
