class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    // 새로운 노드 생성
    let newNode = new Node(val);
    // 큐가 비어있을 때
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    }
    // 큐가 비어있지 않을 때
    else {
      this.last.next = newNode;
      this.last = newNode;
    }
    // 길이 증가
    this.size++;

    return this.size;
  }

  dequeue() {
    // 큐가 비어있을 때
    if (!this.first) return undefined;
    // 큐가 비어있지 않을 때
    else {
      let dequeuedNode = this.first;
      // 큐의 길이가 1일 때
      if (this.size === 1) {
        this.first = null;
        this.last = null;
      }
      // 큐의 길이가 1보다 클 때
      else {
        this.first = dequeuedNode.next;
        // 연결이 끊어진 노드의 next를 null로 설정
        dequeuedNode.next = null;
      }
      // 길이 감소
      this.size--;

      return dequeuedNode;
    }
  }
}