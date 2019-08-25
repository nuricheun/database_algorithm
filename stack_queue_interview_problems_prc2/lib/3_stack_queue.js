// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push
//   - Pop
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
  // TODO: Implement the Node class!
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  // TODO: Implement the Stack class!
  constructor() {
    this.top = this.bottom = null;
    this.length = 0;
  }

  pop() {
    let popped;
    if (this.length === 0) {
      return null;
    } else if (this.length === 1) {
      popped = this.top;
      this.top = this.bottom = null;
    } else {
      popped = this.top;
      this.top = this.top.next;
    }
    this.length--;
    return popped;
  }

  push(node) {
    let newNode = new Node(node.value);
    if (this.length === 0) {
      this.top = this.bottom = newNode;
    } else {
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

class StackQueue {
  // TODO: Implement the StackQueue class!
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
    this.front = this.back = null;
  }
  enqueue(value) {
    let newNode = new Node(value);
    if (this.size() === 0) {
      this.front = this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = this.back.next;
    }
    this.inStack.push(newNode);
    return this.size();
  }

  dequeue() {
    let result;
    if (this.size() === 0) {
      return null;
    } else if (this.size() > 0) {
      if (this.size() === 1) {
        this.front = this.back = null;
      } else {
        this.front = this.front.next;
      }
      if (this.outStack.length === 0) {
        while (this.inStack.length > 0) {
          this.outStack.push(this.inStack.pop());
        }
        result = this.outStack.pop();
      } else {
        result = this.outStack.pop();
      }
    }

    return result;
  }

  size() {
    return this.inStack.length + this.outStack.length;
  }
}

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
