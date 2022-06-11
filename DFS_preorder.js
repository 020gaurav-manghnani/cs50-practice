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
    DFS_preorder(){
        var data=[];
        var current=this.root;
        function traverse(node){
            data.push(node);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        console.log(data);
        traverse(current)
    }
}
var tree=new BST();
tree.insert(10);
tree.insert(12);
tree.insert(9);
tree.insert(1);
tree.insert(0);
tree.insert(72);
tree.DFS_preorder();

// console.log(tree);
