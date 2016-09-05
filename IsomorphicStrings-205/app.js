
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var mapRule = {};
    var reverseRule = {};
    var n1 = s.split('');
    var n2 = t.split('');
    var len = n2.length;
    for (var i = 0; i < len; i++) {
        if (mapRule[n1[i]] === undefined) {
            if (reverseRule[n2[i]]) {
                return false;
            }
            mapRule[n1[i]] = n2[i];
            reverseRule[n2[i]] = n1[i];
        } else {
            if (mapRule[n1[i]] !== n2[i]) {
                return false;
            }
        }
    }
    return true;
};

console.log(isIsomorphic('aa', 'ab'));