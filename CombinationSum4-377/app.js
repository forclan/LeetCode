/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    var len = nums.length;
    var hold = Array.apply(null, Array(target + 1)).map(function() {
        return 0;
    });
    nums.sort(function(a, b) {
        return a - b;
    })
    for (var i = 1; i <= target; i++) {
        for (var j = 0; j < len; j++) {
            if (i < nums[j]) {
                break;
            } else if (i === nums[j]) {
                hold[i] = (hold[i] || 0) + 1;
            } else {
                hold[i] += hold[i - nums[j]];
            }
        }
    }
    return hold[target];
};

console.log(combinationSum4([1, 2, 3], 4));