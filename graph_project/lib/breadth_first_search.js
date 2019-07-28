function breadthFirstSearch(startingNode, targetVal) {
  let queue = [startingNode];
  let visited = new Set();

  while (queue.length > 0) {
    let curr = queue.shift();
    if (visited.has(curr)) {
      continue;
    }
    visited.add(curr);
    if (curr.val === targetVal) {
      return curr;
    }
    queue.push(...curr.neighbors);
  }
  return null;
}

module.exports = {
  breadthFirstSearch
};
