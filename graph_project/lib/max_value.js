function maxValue(node, visited = new Set()) {
  if (visited.has(node)) {
    return -Infinity;
  }
  visited.add(node);
  let maxes = node.neighbors.map(neighbor => {
    return maxValue(neighbor, visited);
  });

  return Math.max(node.val, ...maxes);
}

module.exports = {
  maxValue
};
