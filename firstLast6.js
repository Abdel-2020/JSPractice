function firstLast6(nums){
  var val = nums.slice(-1) == 6 || nums.slice(0,1) == 6 ? true : false

  return val;
  
  }