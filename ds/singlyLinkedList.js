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
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    var current = this.head;
    var newTail = current;
    while (current.next !== null) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return this.tail;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    var oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return oldHead;
  }

  unshift(val) {
    var newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      var oldHead = this.head;
      this.head = newNode;
      newNode.next = oldHead;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) {
      return null;
    }
    if (!this.head) {
      return undefined;
    }

    var counter = 0;
    var current = this.head;
    while (counter !== idx) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(idx, val) {
    var foundNode = this.get(idx);
    if (!foundNode) {
      return null;
    } else {
      var oldVal = foundNode.val;
      foundNode.val = val;
      return oldVal;
    }
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) {
      // if idx is the same as the length
      // then just push it
      return null;
    }
    // with the bottom two conditions, if we don't return it
    // the insert function continues and adds another node and increments the length again
    if (idx === 0) {
      return this.unshift(val);
    }
    if (idx === this.length) {
      return this.push(val);
    }

    // pass in idx - 1 to get the node at the position before
      // because we want to use this node to create a pointer to the new node
    var preNode = this.get(idx - 1);
    var newNode = new Node(val);
    var currentNode = prevNode.next;

    preNode.next = newNode;
    newNode.next = currentNode;
    this.length++;
    return this;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) {
      return null;
    }
    if (idx === 0) {
      return this.shift(idx);
    }
    if (idx === this.length - 1) {
      return this.pop(idx);
    }

    var prevNode = this.get(idx - 1);
    var currentNode = prevNode.next;

    prevNode.next = currentNode.next;
    this.length--;
    return currentNode;
  }

  reverse() {
    if (this.length === 0) {
      return null;
    }
    var prevNode = null;
    var current = this.head;
    var following = current;
    // not sure I understand why this is here
    this.head = this.tail;
    this.tail = current;

    while (current !== null) {
      following = following.next;
      current.next = prevNode;
      prevNode = current;
      current = following;
    }
    return this;
  }
}
