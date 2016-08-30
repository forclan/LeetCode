function getSortArray (nums) {
  return nums.sort(function (a, b) {
    return a - b;
  });
}

function getTriResult(nums) {
    nums = getSortArray(nums);
    var result = [],
        len = nums.length;
    for (var i = 0; i < len; i++) {
        var min = nums[i];
        var target = -min;
        var front = i + 1,
            back = len - 1;
        while(front < back) {
           var sum = nums[front] + nums[back];
            if (target < sum) {
              back--;
            }
            else if (target > sum) {
              front++;
            }
            else {
              var pushFront = nums[front], 
                  pushBack = nums[back];
              result.push([i, front, back]);
              while (nums[front] === pushFront && front < back) {
                front++; 
              }
              while (nums[back] === pushBack && front < back) { 
                back--;  
              }
            }
        }
    }
    return result;
}

var re = getTriResult([-1, -1, 0, 1]);
console.log(re);