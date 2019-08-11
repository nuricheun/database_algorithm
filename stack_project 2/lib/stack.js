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
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.length = 0;
    this.top = this.bottom = null;
  }

  pop() {
    let popped;
    if (this.length === 0) {
      return null;
    }
    if (this.length === 1) {
      popped = this.top;
      this.top = this.bottom = null;
      this.length--;
    } else {
      popped = this.top;
      this.top = this.top.next;
      this.length--;
    }
    return popped.value;
  }
  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.top = this.bottom = newNode;
      this.length++;
    } else {
      newNode.next = this.top;
      this.top = newNode;
      this.length++;
    }
    return this.length;
  }
  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Stack = Stack;
