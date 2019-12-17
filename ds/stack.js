class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var oldFirst = this.first;
      this.first = newNode;
      newNode.next = oldFirst;
    }
    this.size++;
    return this.size;
  }

  pop() {
    if (this.size === 0) {
      return null;
    }
    var poppedNode = this.first;
    if (this.size === 1) {
      this.first = null;
      this.tail = null;
    } else {
      this.first = this.first.next;
      poppedNode.next = null;
    }

    this.size--;
    return poppedNode.val;
  }
}

