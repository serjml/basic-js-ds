const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.base = null;
  }
  root() {
    if (this.base === null) {
      return null;
    }
    return this.base;
  }

  add(data) {
    this.base = addIn(this.base, data);

    function addIn(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addIn(node.left, data)
      } else {
        node.right = addIn(node.right, data)
      }

      return node;
    }
  }

  has(data) {
    return hasWithin(this.base, data);

    function hasWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return hasWithin(node.left, data);
      } else {
        return hasWithin(node.right, data);
      }
    }
  }

  find(data) {
    return searchWithin(this.base, data);

    function searchWithin(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return searchWithin(node.left, data)
      } else {
        return searchWithin(node.right, data)
      }
    }
  }

  remove(data) {
    this.base = removeNode(this.base, data)

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null
        } 

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let maxLeftNode = node.left;
        while (maxLeftNode.right) {
          maxLeftNode = maxLeftNode.right;
        }
        node.data = maxLeftNode.data;
        node.left = removeNode(node.left, maxLeftNode.data);

        return node;
      }
    }
  }

  min() {
    if (!this.base) {
      return null;
    }

    let minimal = this.base;
    while (minimal.left) {
      minimal = minimal.left;
    }
    return minimal.data;
  }

  max() {
    if (!this.base) {
      return null;
    }

    let maximal = this.base;
    while (maximal.right) {
      maximal = maximal.right;
    }
    return maximal.data;
  }
}

module.exports = {
  BinarySearchTree
};