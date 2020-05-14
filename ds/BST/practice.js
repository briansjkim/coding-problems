/**
 * A tree is a data structure that consists of nodes in a parent/child relationship
 *
 * Nonlinear data structure which means that there are many different paths to take
 *
 * Root - the top node in a tree
 * child - a node directly connected to another node when moving away from the root
 * parent- the converse notion of a child
 * siblings - a group of nodes with the same parent
 * leaf - a node w/ no children
 *
 * Ex) HTML DOM, the way your folders are modeled in a directory
 *
 * Regular trees: each node can have any number of child nodes
 * Binary Trees: each node can ONLY have UP TO two child nodes
 * Binary Search Trees: each node can ONLY have UP TO two nodes AND they must be sorted. (the left node must be smaller than the parent node and the right node must be larger)
 */

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
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

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
    return this;
  }
}
