class MaxHeap {
  constructor() {
    this.array = [null];
  }

  getParent(idx) {
    return Math.floor(idx / 2);
  }
  getLeftChild(idx) {
    return idx * 2;
  }
  getRightChild(idx) {
    return idx * 2 + 1;
  }
  siftUp(idx) {
    let arr = this.array;
    if (idx === 1) return;
    let parentIdx = this.getParent(idx);
    if (arr[parentIdx] < arr[idx]) {
      [arr[parentIdx], arr[idx]] = [arr[idx], arr[parentIdx]];
      this.siftUp(parentIdx);
    }
  }

  insert(val) {
    this.array.push(val);
    this.siftUp(this.array.length - 1);
  }

  siftDown(idx) {
    console.log(this.array[idx]);
    let arr = this.array;
    let leftChildIdx = this.getLeftChild(idx);
    let rightChildIdx = this.getRightChild(idx);

    if (leftChildIdx && arr[leftChildIdx] > arr[idx]) {
      [arr[leftChildIdx], arr[idx]] = [arr[idx], arr[leftChildIdx]];
      this.siftDown(leftChildIdx);
    }
    if (rightChildIdx && arr[rightChildIdx] > arr[idx]) {
      [arr[rightChildIdx], arr[idx]] = [arr[idx], arr[rightChildIdx]];
      this.siftDown(rightChildIdx);
    }
  }
}

module.exports = {
  MaxHeap
};
