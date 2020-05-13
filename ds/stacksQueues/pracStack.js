/**
 * Stack: A LIFO data structure
 * The last element added to the stack will be the first one to be removed
 * Ex: Stack of plates, call stack, undo/redo, routing
 *
 * Stacks focus on insertion and removal to be constant time. Searching and access (using LLs) are linear
 */

function Node(val) {
  this.val = val;
  this.next = null;
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // time complexity: Constant O(1)
  // fifo, so adds to the beginning
  push(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let oldFirst = this.first;
      newNode.next = oldFirst;
      this.first = newNode;
    }

    this.size++;
    return this.size;
  }

  // time complexity: Constant O(1)
  // fifo, so removes from the beginning
  pop() {
    if (!this.first) { return null; }
    let poppedNode = this.first;

    // if the first is the same as the tail
    if (this.first === this.last) {
      // set the last node to be null
      this.last = null;
    }
    // then set this.first to be the next node
    // null if this.last is null
    this.first = this.first.next;
    this.size--;
    poppedNode.next = null
    return poppedNode;
  }
}

