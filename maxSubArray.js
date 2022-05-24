/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = (maxSumEndingAtI = nums[0]);
  //kadane algorithm keeps two running totals and compares them the whole way
  for (let i = 1; i < nums.length; i++) {
    maxSumEndingAtI = Math.max(nums[i], maxSumEndingAtI + nums[i]);
    maxSum = Math.max(maxSum, maxSumEndingAtI);
  }
  return maxSum;
};
