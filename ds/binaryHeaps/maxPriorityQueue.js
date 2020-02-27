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
}
