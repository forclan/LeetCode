/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
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

// console.log(rob([1, 2]));