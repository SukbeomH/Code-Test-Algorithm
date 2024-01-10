class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    // if vertex is not in the list, add it to the list
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    // if vertex is in the list, do nothing

    // return the list
    return this.adjacencyList
  }

  addEdge(vertex1, vertex2, weight) {
    // if vertex1 and vertex2 are in the list, add vertex2 to vertex1's list and vice versa
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight })
      this.adjacencyList[vertex2].push({ node: vertex1, weight })
    }
    // if vertex1 or vertex2 are not in the list, do nothing

    // return the list
    return this.adjacencyList
  }  

  dijkstra(start, finish) {
    const nodes = new PriorityQueue()
    const distances = {}
    const previous = {}

    // build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0
        nodes.enqueue(vertex, 0)
      } else {
        distances[vertex] = Number.MAX_VALUE
        nodes.enqueue(vertex, Number.MAX_VALUE)
      }
      previous[vertex] = null
    }

    // as long as there is something to visit
    while(nodes.values.length) {
      // dequeue a vertex from the priority queue
      let smallest = nodes.dequeue().val
      // if that vertex is the same as the ending vertex, we are done
      if (smallest === finish) {
        // build up path to return at the end
        const path = []
        while(previous[smallest]) {
          path.push(smallest)
          smallest = previous[smallest]
        }
        return path.concat(smallest).reverse()
      }
      // otherwise, loop through each value in the adjacency list at that vertex
      if (smallest || distances[smallest] < Number.MAX_VALUE) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor]
          // calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight
          let nextNeighbor = nextNode.node
          if (candidate < distances[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate
            // updating previous - how we got to neighbor
            previous[nextNeighbor] = smallest
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate)
          }
        }
      }
    }
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let node = new Node(val, priority);

    this.values.push(node);
    this.bubbleUp();
  }

  bubbleUp() {
    // 마지막에 넣은 노드의 인덱스
    let index = this.values.length - 1;
    // 부모 노드의 인덱스
    let parentIndex = Math.floor((index - 1) / 2);

    // 부모 노드가 존재하고 그 값이 자식 노드의 값보다 크면 두 노드를 바꿔준다.
    while (this.values[parentIndex] && this.values[parentIndex].priority > this.values[index].priority) {
      [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]];
      // 인덱스를 한 세대 올려준다.
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  dequeue() {
    let min = this.values[0];
    let end = this.values.pop();

    // 길이가 1 이상일 때만 실행한다.
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return min;
  }

  sinkDown() {
    let index = 0;
    let length = this.values.length;
    let element = this.values[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      // 왼쪽 자식이 존재하면서 
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        // 왼쪽 자식의 우선순위가 현재 노드의 우선순위보다 작으면 swap에 왼쪽 자식의 인덱스를 넣어준다.
        if (leftChild.priority < element.priority) swap = leftChildIndex;
      }

      // 오른쪽 자식이 존재하면서
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        // swap이 null이면서 오른쪽 자식의 우선순위가 현재 노드의 우선순위보다 작으면 swap에 오른쪽 자식의 인덱스를 넣어준다.
        // || swap이 null이 아니면서 오른쪽 자식의 우선순위가 왼쪽 자식의 우선순위보다 작으면 swap에 오른쪽 자식의 인덱스를 넣어준다.
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) swap = rightChildIndex;
      }

      // swap이 null이면 반복문을 멈춘다.
      if (swap === null) break;

      // swap이 null이 아니면 두 노드를 바꿔준다.
      [this.values[index], this.values[swap]] = [this.values[swap], this.values[index]];
      index = swap;
    }
  }
}