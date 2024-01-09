class Graph {
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

  addEdge(vertex1, vertex2) {
    // if vertex1 and vertex2 are in the list, add vertex2 to vertex1's list and vice versa
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2)
      this.adjacencyList[vertex2].push(vertex1)
    }
    // if vertex1 or vertex2 are not in the list, do nothing

    // return the list
    return this.adjacencyList
  }

  removeEdge(vertex1, vertex2) {
    // if vertex1 and vertex2 are in the list, remove vertex2 from vertex1's list and vice versa
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2)
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1)
    }
    // if vertex1 or vertex2 are not in the list, do nothing

    // return the list
    return this.adjacencyList
  }

  removeVertex(vertex) {
    // if vertex is in the list, remove it from the list and remove all edges connected to it
    if (this.adjacencyList[vertex]) {
      // remove all edges connected to it
      while (this.adjacencyList[vertex].length) {
        // get adjacentVertex
        const adjacentVertex = this.adjacencyList[vertex].pop()
        // remove the edge between vertex and adjacentVertex
        this.removeEdge(vertex, adjacentVertex)
      }
      // remove vertex from the list
      delete this.adjacencyList[vertex]
    }
    // if vertex is not in the list, do nothing

    // return the list
    return this.adjacencyList
  }
}