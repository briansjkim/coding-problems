/**
 * Doubly LLs are the same as Singly LLs except that each node has both a next and previous pointer
 */

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
}
