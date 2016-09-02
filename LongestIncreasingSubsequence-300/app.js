/**
 * @param {number[]} nums
 * @return {number}
 */

function calLongestSequence(nums) {
    var len = nums.length;
    if (len === 0 || len === 1) {
        return len;
    }
    var contain = [[]];
    for (var i = 0; i < len; i++) {
        contain = pushContain(contain, nums[i]);
        contain = clearRedundant(contain);
    }
    var lenArray = contain.map(function(val) {
        return val.length;
    })
    return Math.max.apply(null, lenArray);
}

function clearRedundant(contain) {
    if (contain.length === 1) {
        return contain;
    }
    var lenArray = contain.map(function(val) {
        return val.length;
    });
    var maxArray = contain.map(function(val) {
        return val[val.length - 1];
    });
    var result = [];
    var compareArray = generateCompareObj(lenArray, maxArray, contain);
    return compareArray;
}
function generateCompareObj(len, maxValue, array) {
    var result = [];
    var lenHold = [];
    for (var i = 0; i < len.length; i++) {
        if (lenHold[len[i]] === undefined) {
            lenHold[len[i]] = {
                maxValue: maxValue[i],
                array: array[i],
            }
        } else {
            if (maxValue[i] < lenHold[len[i]].maxValue) {
                lenHold[len[i]] = {
                    maxValue: maxValue[i],
                    array: array[i],
                }
            }
        }
    }
    var valid = lenHold.filter(function(val) {
        return val !== undefined;
    })
    return valid.map(function(val) {
        return val.array;
    })
}

function pushContain(contain, num) {
    var len = contain.length;
    var arrayNeedPush = [];
    for (var i = 0; i < len; i++) {
        var newArray = pushNum(contain[i], num);
        if (newArray.length > contain[i].length) {
            contain[i] = newArray;
        } else {
            arrayNeedPush.push(newArray);
        }
    }
    contain = contain.concat(arrayNeedPush);
    return contain;
}
function pushNum(array, num) {
    var len = array.length;
    if (len === 0) {
        return [num];
    }
    if (num > array[len - 1]) {
        return array.concat(num);
    } else {
        return generateNewArray(array, num);
    }
}
function generateNewArray(array, num) {
    var tmp = array.filter(function(val) {
        return val < num;
    });
    tmp.push(num);
    return tmp;
}
var lengthOfLIS = function(nums) {

    
};

console.log(calLongestSequence([2, 2]));