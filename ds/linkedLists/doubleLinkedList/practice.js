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

  pop() {
    if (this.length === 0) { return undefined; }

    let removedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }
    this.length--;
    return removedNode;
  }

  shift() {
    if (!this.head) { return undefined; }
    let removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      removedNode.next = null;
      this.head.prev = null;
    }
    this.length--;
    return removedNode;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) { return undefined; }

    let mid = Math.floor(this.length / 2);
    let counter;
    let current;

    if (idx <= mid) {
      current = this.head;
      counter = 0;

      while (counter !== idx) {
        current = current.next;
        counter++;
      }
    } else {
      current = this.tail;
      counter = this.length - 1;

      while (counter !== idx) {
        current = current.prev;
        counter--;
      }
    }

    return current;
  }

  set(val, idx) {
    let retrievedNode = this.get(idx);

    if (retrievedNode) {
      retrievedNode.val = val;
      return true;
    }
    return false;
  }

  insert(val, idx) {
    if (idx < 0 || idx >= this.length) { return false; }
    if (idx === 0) { this.unshift(val); }
    if (idx === this.length) { this.push(val); }

    // get the node at idx - 1
    let retrievedNode = this.get(idx - 1);
    let newNode = new Node(val);
    // get the node after idx - 1
    let nextNode = retrievedNode.next;

    // if retrievedNode is valid
    if (retrievedNode) {
      // set its next to the new node
      retrievedNode.next = newNode;
      // set the new node's prev to the retrieved node
      newNode.prev = retrievedNode;
      // set the new node's next to the nextNode
      newNode.next = nextNode;
      // set the nextNode's prev to the new node
      nextNode.prev = newNode;
      this.length++;
      return true;
    }

    return false;
  }

  remove(idx) {

  }
}
