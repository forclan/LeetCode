/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function reverseGroup(head, length) {
  var node = head;
  var resultArray = [];
  for (var i = 0; i < length; i++) {
    if (node === null) {
      break;
    }
    resultArray.push(node);
    node = node.next;
  }
  var len = resultArray.length;
  if (resultArray.length < length) {
    resultArray.reverse();
    resultArray[len - 1].next = null;
  }
  var resultHead = resultArray[len - 1];
  var nextNode = resultArray[len - 1].next;
  node = resultHead;
  for (var j = 0; j < len; j++) {
    node.next = resultArray[len - 1 - j];
    node = node.next;
  }
  node.next = nextNode;
  return [resultHead, node];
}

var reverseKGroup = function(head, k) {
  if (head === null) {
    return null;
  }
  var re = reverseGroup(head, k);
  var thead = re[0];
  var preTail = re[1];
  while(re[1].next !== null) {
    re = reverseGroup(re[1].next, k);
    preTail.next = re[0]; 
    preTail = re[1];
  }
  return thead;
};

// var array2List = require('../array2List').array2List;
// var logNode = require('../array2List').logNode;

// logNode(reverseKGroup(array2List([1, 2]), 3));

