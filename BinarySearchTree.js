class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  contains(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  BFS() {
    const data = [],
      queue = [];
    let node = this.root;
    queue.push(this.root);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DFSPreOrder() {
    const date = [];
    function traverse(node) {
      date.push(node.value);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    }
    traverse(this.root);
    return date;
  }
  DFSPostOrder() {
    const data = [];
    function traverse(node) {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  DFSInOrder() {
    const data = [];
    function traverse(node) {
      node.left && traverse(node.left);
      data.push(node.value);
      node.right && traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

const tree = new BinarySearchTree();
tree.insert(20);
tree.insert(10);
tree.insert(30);
tree.insert(13);
tree.insert(8);
tree.insert(12);
tree.insert(15);
tree.insert(35);
tree.insert(33);
console.log(JSON.stringify(tree));
