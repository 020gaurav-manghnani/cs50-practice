class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
class BST{
    constructor(){
        this.root=null;
    }
    insert(value){
        var newNode=new Node(value);
        if(this.root===null){
            this.root=newNode;
            console.log(this.root);
        }
        else{
            var current=this.root
            console.log(current);

        }
    }
}

var tree=new BST()
tree.insert(10)
// console.log(tree)