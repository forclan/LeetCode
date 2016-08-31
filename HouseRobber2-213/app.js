/**
 * @param {number[]} nums
 * @return {number}
 */
var robhouse = function(nums) {
    if (nums.length === 0) {
      return 0;
    }
    var len = nums.length;
    var take = [nums[0]];
    for (var i = 1; i < len; i++) {
        take[i] = Math.max(nums[i] + (take[i - 2] || 0), nums[i] + (take[i - 3] || 0));
    }
    return Math.max.apply(null, take);
};

var rob = function(nums) {
  var len = nums.length;
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }
  return Math.max(robhouse(nums.slice(0, len - 1)), nums.slice(1, len));
}
