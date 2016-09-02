/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var len = nums.length;
    if (len === 0) {
        return 0;
    }
    if (len === 1) {
        nums[0];
    }
    var preSum = 0;
    var currentSum = -Infinity;
    for (var i = 0; i < len; i++) {
        if (preSum < 0) {
            preSum = 0;
        }
        if (preSum + nums[i] < 0) {
            preSum = nums[i];
            currentSum = Math.max(preSum, currentSum);
        } else {
            preSum += nums[i];
            currentSum = Math.max(preSum, currentSum);
        }
    }
    return currentSum;
};

console.log(maxSubArray([-3, -2, 3, -2, 1]));