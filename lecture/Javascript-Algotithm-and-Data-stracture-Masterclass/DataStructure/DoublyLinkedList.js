class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // 새로운 노드 생성
    let newNode = new Node(val);
    // 리스트가 비어있을 때
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    // 리스트가 비어있지 않을 때
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
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
      let poppedNode = this.tail;
      // 리스트의 길이가 1일 때
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      }
      // 리스트의 길이가 1보다 클 때
      else {
        this.tail = poppedNode.prev;
        this.tail.next = null;
        // 연결이 끊어진 노드의 prev를 null로 설정
        poppedNode.prev = null;
      }
      // 길이 감소
      this.length--;

      return poppedNode;
    }
  }

  shift() {
    // 리스트가 비어있을 때
    if (!this.head) return undefined;
    // 리스트가 비어있지 않을 때
    else {
      let shiftedNode = this.head;
      // 리스트의 길이가 1일 때
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      }
      // 리스트의 길이가 1보다 클 때
      else {
        this.head = shiftedNode.next;
        this.head.prev = null;
        // 연결이 끊어진 노드의 next를 null로 설정
        shiftedNode.next = null;
      }
      // 길이 감소
      this.length--;

      return shiftedNode;
    }
  }

  unshift(val) {
    // 새로운 노드 생성
    let newNode = new Node(val);
    // 리스트가 비어있을 때
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    // 리스트가 비어있지 않을 때
    else {
      this.head.prev = newNode;
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
    // 인덱스가 리스트의 절반보다 작을 때
    else if (index <= this.length / 2) {
      let current = this.head;
      let count = 0;
      while (count !== index) {
        current = current.next;
        count++;
      }

      return current;
    }
    // 인덱스가 리스트의 절반보다 클 때
    else {
      let current = this.tail;
      let count = this.length - 1;
      while (count !== index) {
        current = current.prev;
        count--;
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
    // 인덱스가 리스트의 시작이나 끝이 아닐 때
    else {
      let newNode = new Node(val);
      let prev = this.get(index - 1);
      let next = prev.next;
      prev.next = newNode;
      newNode.prev = prev;
      newNode.next = next;
      next.prev = newNode;
      // 길이 증가
      this.length++;

      return true;
    }
  }

  remove(val) {
    // 리스트가 비어있을 때
    if (!this.head) return undefined;
    // 리스트가 비어있지 않을 때
    else {
      let removedNode = this.head;
      // 리스트의 길이가 1일 때
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      }
      // 리스트의 길이가 1보다 클 때
      else {
        this.head = removedNode.next;
        this.head.prev = null;
        // 연결이 끊어진 노드의 next를 null로 설정
        removedNode.next = null;
      }
      // 길이 감소
      this.length--;

      return removedNode;
    }
  }
}