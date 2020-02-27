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
    // idx will change every time there is a swap
    let idx = this.values.length - 1;
    var element = this.values[idx];
    // create a while loop so that the newly inserted node can continue to move until it reaches the correct position
    while (idx > 0) {
      // place parentIdx inside the loop because it'll keep changing if there is a swap AND if idx is greater than 0
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      // check for priority
      if (element.priority <= parent.priority) { break; }

      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }


  // dequeue
  // removes root element
  // returns it
  // rearranges the heap using priority
}
