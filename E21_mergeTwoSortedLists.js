/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let curr = new ListNode
  let node = curr
  while (l1 && l2) {
    if (l2.val > l1.val) {
      curr.next = new ListNode(l1.val)
      curr = curr.next
      l1 = l1.next
    } else {
      curr.next = new ListNode(l2.val)
      curr = curr.next
      l2 = l2.next
    }
  }
  curr.next = l1 ? l1 : l2
  return node.next
};
