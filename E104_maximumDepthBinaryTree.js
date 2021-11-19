/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;
  let count = 1;
  let check = [root];
  while (check.length) {
    let times = check.length;
    for (let i = 0; i < times; i++) {
      let node = check.shift();
      if (node.left) check.push(node.left);
      if (node.right) check.push(node.right);
    }
    if (check.length) count++;
  }
  return count;
};
