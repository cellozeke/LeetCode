/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let node = head;
  while (head && head.next) {
    while (head.next && head.next.val === head.val) {
      head.next = head.next.next || null;
    }
    head = head.next;
  }
  return node;
};
