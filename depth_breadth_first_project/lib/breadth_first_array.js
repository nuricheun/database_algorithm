function breadthFirstArray(root) {
  let result = [];
  let queue = [root];
  while (queue.length > 0) {
    let popped = queue.shift();
    result.push(popped.val);
    if (popped.left) {
      queue.push(popped.left);
    }
    if (popped.right) {
      queue.push(popped.right);
    }
  }
  return result;
}

module.exports = {
  breadthFirstArray
};
