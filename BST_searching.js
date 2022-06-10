class Node{
    constructor(value) {
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
    find(value){
        if (this.root===null) console.log("false");
        var current = this.root,
        found=false;

        while(current && !found){
            if(value<current.value){
                current=current.left;
            }
            else if(value>current.value){
                current=current.right

            }
            else{
                return true;
                
            }
        }
        return false;
    }
    BFS(){
        var node=this.root;
        var data=[];
        var queue=[];
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
tree.insert(9);
tree.insert(11);
tree.insert(2);
tree.insert(1);
tree.insert(20);

tree.BFS();
// console.log(data);

// tree.find(8);
// console.log(tree);
