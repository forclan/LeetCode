/**
 * @param {number} n
 * @return {string[]}
 */
var numStore = [[], ['()']];
var separateNumTo = [
  [],
  [1],
];

var numSeparated = function(n) {
  if (separateNumTo[n - 1] === undefined) {
    numSeparated(n - 1);
  }
  var result = [];
  for (var i = 0; i < n - 1; i++) {
    result.push(combineArr()) 
  }
}

var gen = function(n) {
  if (numStore[n - 1] === undefined) {
    gen(n - 1);
  }
  var store = [];
  var wrapperResult = wrapperN(n - 1);
}

var wrapperN = function(n) {
  return numStore[n].map(val => '(' + val + ')');
}
var combineStr = function(s, arr2) {
  var re = [];
  return arr2.map(val => s + val);
}
var combineArr = function(arr1, arr2) {
  var re = [];
  var s = arr1.map(val => combineStr(val, arr2));
  for (var i = 0; i < s.length; i++) {
    re = re.concat((s[i]));
  }
  return re;
}


var generateParenthesis = function(n) {
    
};

console.log(combineStr('s', ['a', 'b', 'c', 'd']));
console.log(combineArr(['1', '2','3'], ['4', '5', '6']));