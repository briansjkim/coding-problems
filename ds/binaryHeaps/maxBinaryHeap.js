class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  bubbleUp(val) {
    // the new node is at the end so we want the element at the end of the heap (IN THE BEGINNING)
    // will change if there's a swap
    var idx = this.values.length - 1;
    // node is going to stay the same value
    let node = this.values[idx];

    // create a while loop with the condition that idx is greater than 0
    // this way, if idx = 0, that means it reached the top of the heap
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      // since this is a maxBinaryHeap, if the node is less than the parent, the node is in the right position
      if (node <= parent) { break; }

      this.values[parentIdx] = node;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  insert(val) {
    this.values.push(val);
    this.swap(val);
    return this;
  }

  sinkDown() {
    let idx = 0;
    var element = this.values[idx];
    var len = this.values.length;

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let swap = null
      let leftChild;
      let rightChild;

      if (leftChildIdx < len) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < len) {
        rightChild = this.values[rightChildIdx];
        if ((rightChild > element && swap === null) || (swap !== null && rightChild > leftChild)) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) {
        break;
      }

      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

  extractMax() {
    var max = this.values[0];
    var end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
}