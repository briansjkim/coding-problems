class MinBinaryHeap {
  constructor() {
    this.values = [];
  }

  swap(val) {
    var idx = this.values.length - 1;

    while (idx > 0) {
      let node = this.values[idx];
      let parentIdx = Math.floor( (idx - 1/ 2));
      let parent = this.values[parentIdx];

      if (node >= parent) { break; }

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
}