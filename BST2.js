class Node{
    constructor(value) {
        this.value=null;
        this.left=null;
        this.right=null;
    }
}
class BST{
    constructor(){
        this.root=null;
    }
    insert(value){
        var newNode= new Node(value);
        if(this.root===null){
            this.root=newNode;
            return this;
        }
        else{
            var current=this.root;
            while(true){
                if(value<current.value){
                    if(current.left===null){
                        current.left=newNode;
                        return this;
                    }
                    else{
                        current=current.left;
                    }
                }
                else if(value>current.value){
                    if(current.right===null){
                        current.right=newNode
                        return this;
                    }
                    else{
                        current=current.right;
                    }

                }
            }
        }
        
    }
}

var tree=new BST()
tree.insert(10);
tree.insert(9);
tree.insert(11);
console.log(tree);
