function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    var newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      var current = this.root;
      while (true) {
        if (newNode.val === current.val) {
          return undefined;
        }
        if (newNode.val < current.val) {
          if (!current.left) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (newNode.val > current.val) {
          if (!current.right) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
    return this;
  }
}
