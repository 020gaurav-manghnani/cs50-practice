class Node{
         constructor(value){
             this.value =value;
             this.left = null;
            this.right = null;
         }
     }

     class Solution {
        //Function to return the level order traversal of a tree.
        constructor() {
            this.root=null;
        }
        insert(value){
               
            var newNode=new Node(value);
        
          if(this.root===null){
              this.root=newNode;
          }
          else{
              var current=this.root;
              console.log(current);
          }
        }
        BFS(){
            var node=new Node(value);
            var data=[];
            var queue=[];
            queue.push(node);
            while(queue.length){
                node=queue.shift();
                data.push(node.value);
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
            console.log(data)
        }
    }
    
    var sol=new Solution()
    sol.insert(1);
    sol.insert(3);
    sol.insert(2);
    // console.log(sol);
    sol.BFS();
        
        
          