function generate(array, num) {
    var result = JSON.parse(JSON.stringify(array));
    if (array.length === 0) {
        return [[], [num]];
    }
    var n = array.map(function(val) {
      val.push(num);
      return val;
    })
    return result.concat(n);
}
var subsets = function(nums) {
    var len = nums.length;
    var result = [];
    for (var i = 0; i < len; i++) {
        result = generate(result, nums[i]);
    }
    return result;
};

console.log(subsets([1, 2, 3]));