var strs = [[], ['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o'],
['p', 'q', 'r', 's'], ['t', 'u', 'v'], ['w', 'w', 'y', 'z']];


function addChar(chars) {
  return function (str) {
    var re = [];
    for (var i = 0; i < chars.length; i++) {
      re.push(str + chars[i]);
    }
    return re;
  };
}

function multiArray2Single(inArr) {
  var outArr = [];
  for (var i = 0; i < inArr.length; i++) {
    if (inArr[i] instanceof Array) {
      var tmpArr = multiArray2Single(inArr[i]);
      outArr = outArr.concat(tmpArr);
    }
    else {
      outArr.push(inArr[i]);
    }
  }
  return outArr;
}

function addNums (arr, num) {
  var result = [];
  var arr0 =  arr.map(addChar(strs[parseInt(num)]));
  return multiArray2Single(arr0);
}

function getCombineNums (nums, arr) {
  if (nums.length === 0) {
    return arr;
  }
  else {
    arr = addNums(arr, nums[0]);
    return getCombineNums(nums.splice(0, 1), arr);
  }
}

getCombineNums([1, 2], []);