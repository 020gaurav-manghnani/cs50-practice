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
     insert(value){
         var newNode=new Node(value);
         if(!this.root){
             this.root=value;
         }else{
              var current=this.root;
              while(true){
                  if(value < current.value){
                      if(current.left===null){
                      current.left=newNode;
                      }
                      else{
                          current=current.left;
                      }
                  }else if(value > current.value){
                      if(current.right===null){
                          current.right=newNode;
                      }else{
                          current=current.right;
                      }
                      
                  }
                  
                  
              }
         }
     }

 }

 var tree= new Node();
 tree.insert(10);
 console.log(tree);