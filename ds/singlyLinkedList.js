class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail = newNode;
    }
    this.head.next = this.tail;
    this.length++;
  }
}

// var test = new SinglyLinkedList;
// test.push(5);
// test.push(6);
// console.log(test);
