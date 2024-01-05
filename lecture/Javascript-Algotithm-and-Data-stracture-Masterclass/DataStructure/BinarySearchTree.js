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

  recursiveInsert(value) {
    let node = new Node(value);
    
    // 루트가 없으면 루트에 넣어준다. (첫번째 노드)
    if (this.root === null) {
      this.root = node;
      return this;
    }
    // 루트가 있으면 루트부터 시작해서 비교한다.
    let current = this.root;
    // 재귀함수로 구현
    function insertNode(current) {
      // 중복값은 허용하지 않는다.
      if (value === current.value) return this;
      // 현재 값보다 작으면 왼쪽으로
      if (value < current.value) {
        // 왼쪽에 노드가 없으면 왼쪽에 넣어준다.
        if (current.left === null) {
          current.left = node;
          return this;
        // 왼쪽에 노드가 있으면 왼쪽 노드를 현재 노드로 바꿔서 다시 비교한다.
        } else {
          return insertNode(current.left);
        }
      // 현재 값보다 크면 오른쪽으로
      } else if (value > current.value) {
        // 오른쪽에 노드가 없으면 오른쪽에 넣어준다.
        if (current.right === null) {
          current.right = node;
          return this;
        // 오른쪽에 노드가 있으면 오른쪽 노드를 현재 노드로 바꿔서 다시 비교한다.
        } else {
          return insertNode(current.right);
        }
      }
    }
    // 재귀함수를 실행하고 전체 트리를 리턴한다.
    return insertNode(current);
  }

  // 반복문으로 구현
  insert(value) {
    let node = new Node(value);

    // 루트가 없으면 루트에 넣어준다. (첫번째 노드)
    if (this.root === null) {
      this.root = node;
      return this;
    }
    // 루트가 있으면 루트부터 시작해서 비교한다.
    let current = this.root;
    // 리턴할 때까지 무한반복
    while(true) {
      // 중복값은 허용하지 않는다.
      if (value === current.value) return this;
      // 현재 값보다 작으면 왼쪽으로
      if (value < current.value) {
        // 왼쪽에 노드가 없으면 왼쪽에 넣어준다.
        if (current.left === null) {
          current.left = node;
          return this;
        // 왼쪽에 노드가 있으면 왼쪽 노드를 현재 노드로 바꿔서 다시 비교한다.
        } else {
          current = current.left;
        }
      // 현재 값보다 크면 오른쪽으로
      } else if (value > current.value) {
        // 오른쪽에 노드가 없으면 오른쪽에 넣어준다.
        if (current.right === null) {
          current.right = node;
          return this;
        // 오른쪽에 노드가 있으면 오른쪽 노드를 현재 노드로 바꿔서 다시 비교한다.
        } else {
          current = current.right;
        }
      }
    }
  }

  // 재귀함수로 구현
  RecursiveFind(value) {
    // 루트가 없으면 false를 리턴한다.
    if (this.root === null) return false;
    // 루트가 있으면 루트부터 시작해서 비교한다.
    let current = this.root;
    // 재귀함수로 구현
    function findNode(value) {
      // 현재 값과 찾는 값이 같으면 현재 노드를 리턴한다.
      if (value === current.value) return current;
      // 현재 값보다 작으면 왼쪽으로
      if (value < current.value) {
        // 왼쪽에 노드가 없으면 false를 리턴한다.
        if (current.left === null) return false;
        // 왼쪽에 노드가 있으면 왼쪽 노드를 현재 노드로 바꿔서 다시 비교한다.
        else {
          current = current.left;
          return findNode(value);
        }
      }
      // 현재 값보다 크면 오른쪽으로
      else if (value > current.value) {
        // 오른쪽에 노드가 없으면 false를 리턴한다.
        if (current.right === null) return false;
        // 오른쪽에 노드가 있으면 오른쪽 노드를 현재 노드로 바꿔서 다시 비교한다.
        else {
          current = current.right;
          return findNode(value);
        }
      }
    }
    // 재귀함수를 실행하고 리턴한다.
    return findNode(value);
  }

  // 반복문으로 구현
  find(value) {
    // 루트가 없으면 false를 리턴한다.
    if (this.root === null) return false;
    // 루트가 있으면 루트부터 시작해서 비교한다.
    let current = this.root;
    let found = false;
    // 끝까지 가거나 찾으면 반복문을 멈춘다.
    while (current && !found) {
      // 현재 값이 찾으려는 값보다 클 때
      if (value < current.value) {
        // 왼쪽으로
        current = current.left;
      }
      // 현재 값이 찾으려는 값보다 작을 때
      else if (value > current.value) {
        // 오른쪽으로
        current = current.right;
      }
      // 현재 값이 찾으려는 값과 같을 때
      else {
        return current;
      }
    }
    // 찾는 값이 없으면 false를 리턴한다.
    return false;
  }

  // BFS (너비 우선 탐색)
  BFS() {
    let queue = [];
    let visited = [];
    let current = this.root;
    queue.push(current);
    while(queue.length) {
      current = queue.shift();
      visited.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return visited;
  }
  recursiveBFS() {
    let queue = [];
    let visited = [];
    let current = this.root;
    queue.push(current);
    function traverse() {
      if (queue.length === 0) return;
      current = queue.shift();
      visited.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      traverse();
    }
    traverse();
    return visited;
  }

  // DFS (깊이 우선 탐색) - 전위 순회
  DFSPreOrder() {
    let visited = [];
    let current = this.root;
    function traverse(node) {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return visited;
  }

  // DFS (깊이 우선 탐색) - 후위 순회
  DFSPostOrder() {
    let visited = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    }
    traverse(current);
    return visited;
  }

  // DFS (깊이 우선 탐색) - 중위 순회
  DFSInOrder() {
    let visited = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return visited;
  }
}