// suppose nums is in ascending order
function take(nums, target) {
    if (nums.length === 0) {
        return 0;
    }
    if (target < 0) {
        return 0;
    }
    if (target === 0) {
        return 1;
    }
    var len = nums.length;
    var result = 0;
    for (var i = 0; i < len; i++) {
        var val = take(nums, target- nums[i])
        result += val;
    }
    return result;
    // return take(nums, target - nums[0]) + take(nums.slice(1, nums.length + 1), target);
}

console.log(take([1, 2, 4], 4));