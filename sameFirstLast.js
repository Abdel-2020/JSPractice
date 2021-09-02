function sameFirstLast(nums){
  var val = nums.length >= 1 && nums[0] == nums.slice(-1) ? true : false
  return val;
}