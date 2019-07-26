function depthFirstSearch(root, targetVal) {
  let stack = [root];
  while (stack.length > 0) {
    let popped = stack.pop();
    if (popped.val === targetVal) {
      return popped;
    } else {
      if (popped.right) {
        stack.push(popped.right);
      }
      if (popped.left) {
        stack.push(popped.left);
      }
    }
  }
  return null;
}

module.exports = {
  depthFirstSearch
};
