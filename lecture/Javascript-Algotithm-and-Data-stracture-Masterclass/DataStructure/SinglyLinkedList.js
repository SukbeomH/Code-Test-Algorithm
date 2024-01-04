class node{
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    // 새로운 노드 생성
    let newNode = new node(val);
    // 리스트가 비어있을 때
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    // 리스트가 비어있지 않을 때
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // 길이 증가
    this.length++;

    return this;
  }

  pop() {
    // 리스트가 비어있을 때
    if (!this.head) return undefined;
    // 리스트가 비어있지 않을 때
    else {
      let current = this.head;
      let newTail = current;
      while (current.next) {
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      // 리스트가 비어있을 때
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }

      return current;
    }
  }

  shift() {
    // 리스트가 비어있을 때
    if (!this.head) return undefined;
    // 리스트가 비어있지 않을 때
    else {
      let currentHead = this.head;
      this.head = currentHead.next;
      this.length--;
      // 리스트가 비어있을 때
      if (this.length === 0) {
        this.tail = null;
      }

      return currentHead;
    }
  }

  unshift(val) {
    // 새로운 노드 생성
    let newNode = new node(val);
    // 리스트가 비어있을 때
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    // 리스트가 비어있지 않을 때
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    // 길이 증가
    this.length++;

    return this;
  }

  get(index) {
    // 인덱스가 범위를 벗어날 때
    if (index < 0 || index >= this.length) return null;
    // 인덱스가 범위 내에 있을 때
    else {
      let counter = 0;
      let current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }

      return current;
    }
  }

  set(index, val) {
    let foundNode = this.get(index);
    // 노드를 찾지 못했을 때
    if (!foundNode) return false;
    // 노드를 찾았을 때
    else {
      foundNode.val = val;
      return true;
    }
  }

  insert(index, val) {
    // 인덱스가 범위를 벗어날 때
    if (index < 0 || index > this.length) return false;
    // 인덱스가 범위 내에 있을 때
    else if (index === this.length) return !!this.push(val);
    else if (index === 0) return !!this.unshift(val);
    else {
      let newNode = new node(val);
      let prev = this.get(index - 1);
      let temp = prev.next;
      prev.next = newNode;
      newNode.next = temp;
      this.length++;

      return true;
    }
  }

  remove(index) {
    // 인덱스가 범위를 벗어날 때
    if (index < 0 || index >= this.length) return undefined;
    // 인덱스가 범위 내에 있을 때
    else if (index === this.length - 1) return this.pop();
    else if (index === 0) return this.shift();
    else {
      let prev = this.get(index - 1);
      let removed = prev.next;
      prev.next = removed.next;
      this.length--;

      return removed;
    }
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next = node.next;
    let prev = null;
    while (next) {
      node.next = prev;
      prev = node;
      node = next;
      next = node.next;
    }
    node.next = prev;

    return this;
  }
}