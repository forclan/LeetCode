
var mergeKLists = function(lists) {
  return getResult(lists);
};

function getResult(lists) {
  var result = [];
  var numList = [];
  var listsWithEmpty = lists.filter(function(val) {
    if (val) {
        if (val.length > 0) {
            return true;
        }
    }
    return false;
  });
  while (listsWithEmpty.length !== 0 || numList.length !== 0) {
    getNumSmallThan(listsWithEmpty, numList);
    result.push(numList.shift());
  }
  return result;
}

function getNumSmallThan(lists, numList) {
  if (listIsEmpty(lists)) {
    return numList;
  }
  if (listIsEmpty(numList)) {
    if (listIsEmpty(lists)) {
      return numList;
    }
    numList.push(getANumFromLists(lists, 0));
    getNumSmallThan(lists, numList);
  }
  for (var i = 0; i < lists.length; i++) {
    if (lists[i][0] < numList[0]) {
      numList.unshift(getANumFromLists(lists, i));
      getNumSmallThan(lists, numList);
    }
  } 
}
function getANumFromLists(lists, listIdx) {
  if (listIsEmpty(lists)) {
    return [];
  }
  if (lists[listIdx] === undefined) {
    return getANumFromLists(lists, listIdx - 1);
  }

  if (listIsEmpty(lists[listIdx])) {
    lists.splice(listIdx, 1);
    return getANumFromLists(lists, listIdx);
  }
  var result = lists[listIdx].shift();
  if (listIsEmpty(lists[listIdx])) {
    lists.splice(listIdx, 1);
  }
  return result;
}

function listIsEmpty(list) {
  return list.length === 0;
}
var s = getResult([[1]]);
console.log(s);