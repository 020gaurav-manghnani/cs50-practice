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
                // found=true;
                console.log("found")
            }
        }
        return current;
    }
}

var tree=new BST()
tree.insert(10);
tree.insert(9);
tree.insert(11);
tree.find(8);
console.log(tree);
