class Graph{
    constructor(){
        this.adjancyList={}
    }
    addVertex(vertex){
        if(!this.adjancyList[vertex]){
            this.adjancyList[vertex]=[];
        }
    }
    addEdge(v1,v2){
        this.adjancyList[v1].push(v2);
        this.adjancyList[v2].push(v1);
    }
}

var graph=new Graph()
graph.addVertex("tokyo")
graph.addVertex("dallas")
graph.addVertex("kanpur")
// graph.adjancyList[""].push("jai hind")

graph.addEdge("kanpur","tokyo");
console.log(graph.adjancyList);