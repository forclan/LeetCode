/**
 * @param {number[]} nums
 * @return {string[]}
 */
function Range(start) {
    if (start === undefined) {
        throw Error('start could not be empty')
    }
    this.start = start;
    this.end = null;
}
Range.prototype.toString = function() {
    if (!this.end) {
        return '' + this.start;
    }
    return this.start + '->' + this.end;
}

var summaryRanges = function(nums) {
    var holdArr = [];
    var len = nums.length;
    if (len === 0) {
        return [];
    }        
    var currentObj = null;
    for (var i = 0; i < len; i++) {
        if (!currentObj) {
            currentObj = new Range(nums[i]);
            holdArr.push(currentObj);
        } else if (currentObj.end === null) {
            if (nums[i] === currentObj.start + 1) {
                currentObj.end = nums[i];
            } else {
                currentObj = new Range(nums[i]);
                holdArr.push(currentObj);
            }
        } else {
            if (currentObj.end + 1 === nums[i]) {
                currentObj.end = currentObj.end + 1;
            } else {
                currentObj = new Range(nums[i]);
                holdArr.push(currentObj);
            }
        }
    }
    var result = [];
    for (var i = 0; i < holdArr.length; i++) {
        result.push(holdArr[i].toString());
    }
    return result;
};

console.log(summaryRanges([1, 3]))
// summaryRanges([0,1,2,4,5,7])