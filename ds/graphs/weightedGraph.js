class WeightedGraph {
  constructor() {
    this.adjacencyList = [];
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
    return this;
  }

  addEdge(v1, v2, weight) {
    if (!this.adjacencyList[v1].includes(v2)) {
      this.adjacencyList[v1].push({node: v2, weight});
    }

    if (!this.adjacencyList[v2].includes(v1)) {
      this.adjacencyList[v2].push({node: v1, weight});
    }
    return this;
  }
}