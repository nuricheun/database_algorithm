// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  pop() {
    if (this.length <= 0) {
      return null;
    }
    let popped;
    if (this.size() === 1) {
      popped = this.top;
      this.top = null;
      this.bottom = null;
    } else if (this.length === 2) {
      popped = this.top;
      this.top = this.bottom;
    } else {
      popped = this.top;
      this.top = this.top.next;
    }
    this.length--;
    return popped.value;
  }
  push(value) {
    let newNode;
    if (this.length === 0) {
      this.top = new Node(value);
      this.bottom = this.top;
    } else {
      newNode = new Node(value);
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length++;
    return this.length;
  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Stack = Stack;

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
