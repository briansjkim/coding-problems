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
}
