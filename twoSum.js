// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

//compliment solution
var twoSum = function (nums, target) {
  //compliment solution compliment = target - current[i] o(n) SOL
  let resultObj = {};

  //1. iterate through the loop at each pass we check if the compliment is in our object, if it is return i, and the compliment
  for (let i = 0; i < nums.length; i++) {
    //1A.Store each element value
    let num = nums[i];
    //1B. store the compliment at each iteration
    let complement = target - num;
    if (complement in resultObj) return [i, resultObj[complement]];
    //2. otherwise add the compliment
    else resultObj[num] = i;
  }
};
