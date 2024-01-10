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
}