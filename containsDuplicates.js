var containsDuplicate = function (nums) {
  //1. pass through the array once and store the array into a hash table
  let i = 0;
  let result = {};
  while (i < nums.length) {
    //1A. store each elt and its frequency
    //if the object has the value add 1 to its frequency
    if (nums[i] in result) result[nums[i]] += 1;
    //otherwise add it as a value of one
    else result[nums[i]] = 1;
    i++;
  }
  //2. check if any of the keys have a val gr8er than 1
  console.log(result[3]);
  //return the values that are greater than 1.
  return Object.values(result).filter((element) => element > 1);
};
