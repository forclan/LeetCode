/**
 * @param {number} numRows
 * @return {number[][]}
 */
function getNextRow(preRow) {
    var result = [0];
    for (var i = 0, len = preRow.length; i < len; i++) {
        result[i] = (preRow[i-1] || 0)+ preRow[i];
    }
    result.push(1);
    return result;
}
var generate = function(numRows) {
    var result = [[1]];
    if (numRows === 0) {
        return [];
    } 
    for (var i = 1; i < numRows; i++) {
        result[i] = getNextRow(result[i - 1]);
    }
    return result;
};


// console.log(generate(5));