/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 1) {
        return 1;
    }
    // 0->1 1->1
    var a = [1, 1];
    for (var i = 2; i <= n; i++) {
        a[i] = a[i - 2] + a[i - 1];
    }
    return a[n];
};