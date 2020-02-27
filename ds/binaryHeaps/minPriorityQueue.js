// This Priority Queue based on the lower the priority value, the higher the urgency/priority
// basically, based on minBinaryHeap

function Node(val, priority) {
  // val doesn't quite matter because the priority queue will be constructed using priority
  this.val = val;
  this.priority = priority;
}

// going to be based on a minBinaryHeap so the lower the number for priority, the higher the priority
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    // adds new nodes to the end
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      // since this is a priority queue and we're creating the hierarchy so that the lower number in priority is more urgent
      if (element.priority >= parent.priority) { break; }

      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values[this.values.length - 1];
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

}
