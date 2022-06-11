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
            return this;
        }
        else{
            var current=this.root;
            while(current){
                if(value < current.value){
                    if(current.left===null){
                        current.left=newNode;
                        return this;
                    }
                    else{
                        current=current.left;
                    }
                }
                else if(value > current.value){
                    if(current.right===null){
                        current.right=newNode;
                        return this;
                    }
                    else{
                        current=current.right;
                    }
                }
            }
        }
    }
    BSF(){
        var node=this.root;
        var queue=[];
        var data=[];

        queue.push(node);
        while(queue.length){
            node=queue.shift();
            data.push(node.value);

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        console.log(data);
    }
}
var tree=new BST()
tree.insert(10);
tree.insert(11);
tree.insert(19);
tree.insert(1);
tree.insert(0);
// console.log(tree);
tree.BSF();
// console.log(tree);