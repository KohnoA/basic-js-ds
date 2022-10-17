const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(value) {
    this.data = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root_ = null
  }

  root() {
    return this.root_
  }

  add(data) {
    this.root_ = addWithin(this.root_, data)

    function addWithin(node, value) {
      if(!node) {
        return new Node(value)
      }

      if(value === node.data) {
        return node
      }

      if(value < node.data) {
        node.left = addWithin(node.left, value)
      } else {
        node.right = addWithin(node.right, value)
      }

      return node
    }
  }

  has(data) {
    return hasWhithin(this.root_, data)

    function hasWhithin(node, value) {
      if(!node) {
        return false
      }

      if(node.data === value) {
        return true
      }

      if(node.data > value) {
        return hasWhithin(node.left, value) 
      } else {
        return hasWhithin(node.right, value)
      }
    }
  }

  find(data) {
    return findWhithin(this.root_, data)

    function findWhithin(node, value) {
      if(!node) {
        return null
      }

      if(node.data === value) {
        return node
      }

      if(node.data > value) {
        return findWhithin(node.left, value) 
      } else {
        return findWhithin(node.right, value)
      }
    }
  }

  remove(data) {
    this.root_ = removeWithin(this.root_, data)
    
    function removeWithin(node, value) {
      if(!node) {
        return null
      }

      if(node.data > value) {
        node.left = removeWithin(node.left, value)
        return node

      } else if(node.data < value) {
        node.right = removeWithin(node.right, value)
        return node

      } else {
        if(!node.left && !node.right) {
          return null
        }

        if(!node.left) {
          node = node.right
          return node
        }

        if(!node.right) {
          node = node.left
          return node
        }

        let maxFromLeft = node.left

        while(maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right
        }

        node.data = maxFromLeft.data

        node.left = removeWithin(node.left, maxFromLeft.data)

        return node
      }
    }
  }

  min() {
    if(this.root_ === null) {
      return null
    } else {
      return minWithin(this.root_)
    }

    function minWithin(node) {
      if(!node.left) {
        return node.data
      }

      return node.left = minWithin(node.left)
    }
  }

  max() {
    if(this.root_ === null) {
      return null
    } else {
      return maxWithin(this.root_)
    }

    function maxWithin(node) {
      if(!node.right) {
        return node.data
      }

      return node.right = maxWithin(node.right)
    }
  }
}

module.exports = {
  BinarySearchTree
};

const bTree = new BinarySearchTree()

console.log(bTree.add(9))
console.log(bTree.add(4))
console.log(bTree.add(3))
console.log(bTree.add(2))
console.log(bTree.add(1))
console.log(bTree.min())
// console.log(bTree)