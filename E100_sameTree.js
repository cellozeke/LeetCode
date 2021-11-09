var isSameTree = function(p, q) {
  if (!!p !== !!q) return false;
  if (!p) return true;
  if (!isSameSubtree(p, q)) return false;
  let left = isSameTree(p.left, q.left);
  let right = isSameTree(p.right, q.right);
  return left && right;
};

var isSameSubtree = function(p, q) {
  if (!!p.left !== !!q.left) return false;
  if (!!p.right !== !!q.right) return false;
  let left = !!p.left ? p.left.val === q.left.val : true;
  let right = !!p.right ? p.right.val === q.right.val : true;
  return p.val === q.val && left && right;
}
