// starts at the root node
// traverses the tree FROM LEFT TO RIGHT

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.val = null;
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

  search(val) {
    if (!this.root) {
      return false;
    }
    if (this.root.val === val) {
      return true;
    } else {
      var current = this.root;
      while (current) {
        if (val < current.val) {
          if (!current.left) {
            return false;
          } else if (current.left.val === val) {
            return true;
          } else {
            current = current.left;
          }
        } else {
          if (!current.right) {
            return false;
          } else if (current.right.val === val) {
            return true;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  BFS() {
    var result = [];
    var queue = [];
    var node = this.root;
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      result.push(node);
      if (node.left) { queue.push(node.left) };
      if (node.right) { queue.push(node.right) };
    }
    return result;
  }
}