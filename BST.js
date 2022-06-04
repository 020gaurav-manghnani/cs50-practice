class Node{
    constructor(value){
        this.value=value;
        this.right=null;
        this.left=null;
    }
}

 class BST{
     constructor(){
         this.root=null;
     }
 }

 var tree= new BST();
 tree.root=new Node(10);
 tree.root.right=new Node(11);
 tree.root.left= new Node(8);
 tree.root.left.right= new Node(9);
 console.log(tree);