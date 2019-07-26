function treeHeight(root) {
  if (!root) {
    return -1;
  }

  let rightDep = 1 + treeHeight(root.right);
  let leftDep = 1 + treeHeight(root.left);

  if (rightDep > leftDep) {
    return rightDep;
  } else {
    return leftDep;
  }
}

module.exports = {
  treeHeight
};
