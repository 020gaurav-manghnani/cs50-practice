//creating structre of a node to use it later while creating new node
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

//creating structure of a stack to add new nodes into it
class Stack{
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0;
    }
    //now crating a push function to add new values into stack
    push(val){
        // creating a new node by using the structure of node class we created above
        var newNode= new Node(val);
        //now checking if there is no node present in stack 
        if(!this.first){
            this.first=newNode;
            this.last=newNode;
        }
        else{
            var temp=this.first;
            this.first=newNode;
            this.first.next=temp;
        }
        return ++this.size;
    }
}
// now creating an object for class stack to access it
var stack=new Stack();
stack.push(100);
stack.push(200);
stack.push(300);
console.log(stack);
