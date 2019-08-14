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
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = this.back = null;
    this.length = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.front = this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    this.length++;
    return this.length;
  }

  dequeue() {
    let dequeued;
    if (this.length === 0) {
      return null;
    } else if (this.length === 1) {
      dequeued = this.front;
      this.front = this.back = null;
    } else {
      dequeued = this.front;
      this.front = this.front.next;
      dequeued.next = null;
    }
    this.length--;
    return dequeued.value;
  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Queue = Queue;
