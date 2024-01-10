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

  recursiveDFS(vertex) {
    // create a list to store the result
    const result = []
    // create a list to store visited vertices
    const visited = {}
    // create a helper function which accepts a vertex
    const dfs = (vertex) => {
      // if vertex is empty, return
      if (!vertex) return null
      // add vertex to visited list
      visited[vertex] = true
      // add vertex to result list
      result.push(vertex)
      // for each neighbor of vertex
      this.adjacencyList[vertex].forEach(neighbor => {
        // if neighbor is not visited
        if (!visited[neighbor]) {
          // recursively call dfs on neighbor
          return dfs(neighbor)
        }
      })
    }
    // invoke the helper function with the starting vertex
    dfs(vertex)

    // return the result
    return result
  }

  iterativeDFS(vertex) {
    // create a list to store the result
    const result = []
    // create a list to store visited vertices
    const visited = {}
    // create a stack to store vertices
    const stack = [vertex]
    // while stack is not empty
    while (stack.length) {
      // pop a vertex from the stack
      const currentVertex = stack.pop()
      // if vertex is not visited
      if (!visited[currentVertex]) {
        // add vertex to visited list
        visited[currentVertex] = true
        // add vertex to result list
        result.push(currentVertex)
        // for each neighbor of vertex
        this.adjacencyList[currentVertex].forEach(neighbor => {
          // if neighbor is not visited
          if (!visited[neighbor]) {
            // push neighbor to stack
            stack.push(neighbor)
          }
        })
      }
    }

    // return the result
    return result
  }
}