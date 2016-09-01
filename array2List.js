 /* 
 *function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function array2List(array) {
  if (array.length === 0) {
    return null;
  }
  var head = new ListNode(array[0]);
  var tail = head;
  for (var i = 1; i < array.length; i++) {
    tail.next = new ListNode(array[i]);
    tail = tail.next;
  }
  return head;
}

function logNode(node) {
  if (node === null) {
    console.log([]);
  }
  var result = [];
  while(node !== null) {
    result.push(node.val);
    node = node.next;
  }
  console.log(result);
}
module.exports.array2List = array2List;
module.exports.logNode = logNode;