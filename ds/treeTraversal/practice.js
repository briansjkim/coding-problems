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

  search(val) {
    if (!this.root) {
      return false;
    } else if (this.root.val === val) {
      return true;
    }

    let current = this.root;

    while (current) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  // BFS
  // Starts at the root node and traverses from left to right
  bfs() {
    if (!this.root) { return undefined; }

    let queue = [];
    let tree = [];
    let node = this.root;
    queue.push(node);

    while (queue.length > 0) {
      node = queue.shift();
      tree.push(node);
      if (node.left) { queue.push(node.left); }
      if (node.right) { queue.push(node.right); }
    }
    return tree;
  }

  //DFS Pre-Order
  // Works down first, left first then right
  dfsPre() {
    if (!this.root) { return undefined; }

    let result = [];

    function traverse(node) {
      result.push(node);
      if (node.left) { traverse(node.left); }
      if (node.right) { traverse(node.right); }
    }

    traverse(this.root);
    return result;
  }

  // DFS Post-Order
  // Same as Pre-order EXCEPT you must VISIT each node before adding it
  dfsPost() {
    let result = [];

    function traverse(node) {
      if (node.left) { traverse(node.left); }
      if (node.right) { traverse(node.right); }
      result.push(node.left);
    }

    traverse(this.root);
    return result;
  }

  //DFS InOrder
  // Traverse the entire left, add the node, go back to its parent and add it, then traverse its right
  dfsIn() {
    let result = [];

    function traverse(node) {
      if (node.left) { traverse(node.left); }
      result.push(node.left);
      if (node.right) { traverse(node.right); }
    }

    traverse(this.root);
    return result;
  }
}
