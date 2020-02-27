// This Priority Queue is based on the higher the priority value, the higher the urgency/priority
// basically, based on maxBinaryHeap

function Node(val, priority) {
  this.val = val;
  this.priority = priority;
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    var newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parentEl = this.values[parentIdx];

      // since this is a priority queue and we're creating the tree so that the higher number in priority is more urgent
      if (element.priority <= parentEl.priority) { break; }

      this.values[parentIdx] = element;
      this.values[idx] = parentEl;
      idx = parentIdx;
    }
  }

  dequeue() {
    const max = this.values[0];
    const end = this.values.pop();
    // if the length of values is greater than 0, assign 'end' to the root node and run sinkDown
    // we don't want to move 'end' to the root and run sinkDown because the end will constantly become the root
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    const element = this.values[0];

    while (idx < this.values.length - 1) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild;
      let rightChild;
      // swap will keep track of the index of that will contain the element that will be swapped with the root
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority > element.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        // if swap is null and the rightChild's priority is greater than element's priority, swap
        // OR if swap isn't null (which means the leftChild's priority is greater than the element's priority) and rightChild's priority is greater than the leftChild's priority, swap
        if ((rightChild.priority > element.priority && swap === null) || (swap !== null && rightChild.priority > leftChild.priority)) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) { break; }

      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
