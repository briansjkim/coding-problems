class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
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
    if (this.length === 0) {
      return undefined;
    }
    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      poppedNode.prev = null;
      this.tail.next = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }
    var shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      shiftedNode.next = null;
      this.head.prev = null;
    }
    this.length--;
    return shiftedNode;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
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
    if (idx < 0 || idx >= this.length) {
      return null;
    }
    let counter;
    let current;
     // can go from beginning to the end or end to beginning
        // which direction you go depends on the number of the idx
    if (idx > Math.floor(this.length / 2)) {
      current = this.tail;
      counter = this.length - 1;
      while (counter !== idx) {
        current = current.prev;
        counter--;
      }
      return current;
    } else {
      current = this.head;
      counter = 0;
      while(counter !== idx) {
        current = current.next;
        counter++;
      }
      return current;
    }
  }

  insert(idx, val) {
    if (idx < 0 || idx >= this.length) {
      return null;
    }
    if (idx === 0) {
      return this.unshift(val);
    }
    if (idx === this.length) {
      return this.push(val);
    }

    var prevNode = this.get(idx - 1);
    var newNode = new Node(val);
    var afterNode = prevNode.next;

    if (prevNode) {
      prevNode.next = newNode;
      newNode.prev = prevNode;
      afterNode.prev = newNode;
      newNode.next = afterNode;
      this.length++;
      return list;
    }
    return undefined;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) {
      return null;
    }
    if (idx === 0) {
      return this.shift();
    }
    if (idx === this.length - 1) {
      return this.pop();
    }

    var removedNode = this.get(idx);
    var prevNode = removedNode.prev;
    var afterNode = removedNode.next;

    if (removedNode) {
      prevNode.next = afterNode;
      afterNode.prev = prevNode;
      removedNode.next = null;
      removedNode.prev = null;
      this.length--;
      return removedNode;
    }
    return undefined;
  }
}
