// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require("./tree_node.js");

var buildTree = function(preorder, inorder) {
  if (preorder.length === 1) {
    return new TreeNode(preorder[0]);
  }

  if (preorder.length < 1) {
    return null;
  }

  let root = new TreeNode(preorder[0]);
  let rootIdx = inorder.indexOf(root.val);

  if (preorder[0] === inorder[0]) {
    let rightIn = inorder.slice(rootIdx + 1);
    let rightPre = preorder.slice(rootIdx + 1);
    root.left = null;
    console.log(rightPre, rightIn);
    root.right = buildTree(rightPre, rightIn);
  } else {
    let leftIn = inorder.slice(0, rootIdx);
    let rightIn = inorder.slice(rootIdx + 1);
    let idx = leftIn.length;
    let leftPre = preorder.slice(1, idx + 1);
    let rightPre = preorder.slice(idx + 1);
    console.log(root.val);
    console.log(idx);
    console.log("left:", leftPre, leftIn);
    console.log(rightPre, rightIn);
    root.left = buildTree(leftPre, leftIn);
    root.right = buildTree(rightPre, rightIn);
  }
  return root;
};
