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
}