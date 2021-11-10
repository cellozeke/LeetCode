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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (!root) return [];
  if (!root.left && !root.right) return [root.val];
  let nodes = [root];
  let res = [];
  while (nodes.length) {
    let node = nodes.shift();
    if (node.left) {
      res.push(node.left.val);
      nodes.push(node.left);
    }
    if (node.left || node.right) res.push(node.val);
    if (node.right) nodes.push(node.right);
  }
  return res;
};
