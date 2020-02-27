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

  // enqueue
  // accepts a value and a priority
  // makes a new node
  // places it in the right spot based on priority


  // dequeue
  // removes root element
  // returns it
  // rearranges the heap using priority
}
