class PriorityQueue {
  constructor() {
    this.values = []
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority)
  }

  enqueue(val, priority) {
    this.values.push({ val, priority })
    this.sort()
  }

  dequeue() {
    return this.values.shift()
  }
}

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