// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // TODO: Implement the addToTail method here
  addToTail(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // TODO: Implement the removeTail method here
  removeTail() {
    let removed;
    if (this.length === 1) {
      removed = this.head;
      this.head = null;
      this.tail = null;
    } else if (this.length === 0) {
      return undefined;
    } else {
      let currNode = this.head;
      removed = this.tail;
      while (currNode.next.next) {
        currNode = currNode.next;
      }
      currNode.next = null;
      this.tail = currNode;
    }
    this.length--;
    return removed;
  }

  // TODO: Implement the addToHead method here
  addToHead(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // TODO: Implement the removeHead method here
  removeHead() {
    let removed;
    if (this.length === 0) {
      return undefined;
    } else if (this.length === 1) {
      removed = this.head;
      this.head = null;
      this.tail = null;
    } else {
      removed = this.head;
      this.head = this.head.next;
    }
    this.length--;
    return removed;
  }

  // TODO: Implement the contains method here
  contains(target) {
    let curr = this.head;
    while (curr) {
      if (curr.value === target) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  }

  // TODO: Implement the get method here
  get(index) {
    let i = 0;
    let curr = this.head;
    while (i < index) {
      curr = curr.next;
      if (!curr) {
        return null;
      }
      i++;
    }
    return curr;
  }

  // TODO: Implement the set method here
  set(index, val) {
    let target = this.get(index);
    if (target) {
      target.value = val;
      return true;
    }
    return false;
  }

  // TODO: Implement the insert method here
  insert(index, val) {
    let newNode = new Node(val);
    if (index === 0) {
    }
  }

  // TODO: Implement the remove method here
  remove(index) {
    if (index > this.length - 1) {
      return undefined;
    } else if (index === 0) {
      return this.removeHead();
    } else if (index === this.length - 1) {
      return this.removeTail();
    }
    let i = 0;
    let curr = this.head;
    let removed;
    while (i < index - 1) {
      i++;
      if (curr.next) {
        curr = curr.next;
      }
    }
    removed = curr.next;
    curr.next = curr.next.next;
    this.length--;
    return removed;
  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
