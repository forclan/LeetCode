/**
 * @param {number[][]} triangle
 * @return {number}
 */
 
function getMinOfMayBeNaN(num1, num2) {
    if (isNaN(num1)) {
        return num2;
    }
    if (isNaN(num2)) {
        return num1;
    }
    return Math.min(num1, num2);
}
function getNum(lengthArray, storeArray) {
    var result = [];
    var len = lengthArray.length;
    for (var i = 0; i < len; i++) {
        var sum1 = storeArray[i - 1] + lengthArray[i];
        var sum2 = storeArray[i] + lengthArray[i];
        result[i] = getMinOfMayBeNaN(sum1, sum2);
    }
    return result;
}
var minimumTotal = function(triangle) {
    var len = triangle.length;
    var result = triangle[0];
    for (var i = 1; i < len; i++) {
        result = getNum(triangle[i], result);
    }
    return Math.min.apply(null, result); 
};

var arr = [
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
console.log(minimumTotal(arr));