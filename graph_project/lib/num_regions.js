function numRegions(graph) {
  let visited = new Set();
  let count = 0;
  Object.keys(graph).forEach(node => {
    if (visited.has(node)) {
      return;
    }
    visited.add(node);
    if (countEdge(graph, node, visited)) {
      count++;
    }
  });
  return count;
}

function countEdge(graph, node, visited) {
  graph[node].forEach(e => {
    if (visited.has(e)) {
      return false;
    }
    visited.add(e);
    countEdge(graph, e, visited);
  });
  return true;
}

module.exports = {
  numRegions
};
