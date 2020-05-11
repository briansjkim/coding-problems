/**
 * A linked list contains a head, tail, and length (sometimes) property
 *
 * Linked Lists consists of nodes and each node has a value and a pointer to another node or null
 *
 * Singly Linked Lists are only connected to the next node, not the previous node
 */

function Node(val) {
  this.val = val;
  this.next = null;
}

class SinglyLinkedList {
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
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

var singly = new SinglyLinkedList;
// console.log(singly.push(1));
// console.log(singly.push(2));
// console.log(singly.push(3));
