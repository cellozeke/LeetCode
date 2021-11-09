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
// .load E2_addTwoNumbers.js

var addTwoNumbers = function(l1, l2) {
  let sum = 0
  let current = new ListNode()
  let res = current
  while (l1 || l2) {
    if (l1) {
      sum += l1.val
      l1 = l1.next
    }
    if (l2) {
      sum += l2.val
      l2 = l2.next
    }
    current.next = new ListNode(sum % 10)
    current = current.next
    sum = sum > 9 ? 1 : 0
  }
  if (sum) current.next = new ListNode(1)
  return res.next
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]))
console.log(addTwoNumbers([9, 9, 9], [5, 6, 4]))
