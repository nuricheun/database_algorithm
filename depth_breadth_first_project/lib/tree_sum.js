function treeSum(root) {
  let result = 0;
  if (!root) {
    return 0;
  }
  let stack = [root];
  while (stack.length > 0) {
    let popped = stack.pop();
    result += popped.val;
    if (popped.right) {
      stack.push(popped.right);
    }
    if (popped.left) {
      stack.push(popped.left);
    }
  }

  return result;
}

module.exports = {
  treeSum
};
