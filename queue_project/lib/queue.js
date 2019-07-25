// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
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

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  enqueue(val) {
    let newNode;
    if (this.length <= 0) {
      newNode = new Node(val);
      this.back = newNode;
      this.front = newNode;
    } else {
      this.back.next = new Node(val);
      this.back = this.back.next;
    }

    this.length++;
    return this.length;
  }
  dequeue() {
    let curr = this.front;
    let popped;
    if (this.length <= 0) {
      return null;
    } else if (this.length === 1) {
      popped = this.front;
      this.front = null;
      this.back = null;
    } else {
      popped = this.front;
      this.front = this.front.next;
    }
    this.length--;
    return popped.value;
  }
  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Queue = Queue;
