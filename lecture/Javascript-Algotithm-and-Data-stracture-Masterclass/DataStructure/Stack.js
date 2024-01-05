class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    }
    else {
      newNode.prev = this.last;
      this.last = newNode;
    }

    this.size++;

    return this;
  }

  pop() {
    if (!this.first) return undefined;
    else {
      let poppedNode = this.last;

      if (this.size === 1) {
        this.first = null;
        this.last = null;
      }
      else {
        this.last = poppedNode.prev;
        poppedNode.prev = null;
      }

      this.size--;

      return poppedNode;
    }
  }
}