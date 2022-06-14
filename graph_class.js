class Graph{
    constructor(){
        this.adjancyList={}
    }
    addVertex(vertex){
        if(!this.adjancyList[vertex]){
            this.adjancyList[vertex]=[];
        }
    }
}

var graph=new Graph()
graph.addVertex("tokyo")
graph.addVertex("india")
graph.adjancyList["india"].push("jai hind")
console.log(graph);