class Node{
    constructor(value) {
        this.value=value;
        this.next=null;
    }
}
class Stack{
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0;
    }
    push(val){
        var newNode=new Node(val);
        this.first=newNode;
        this.first.next=newNode;
    }
    

}

var stack=new Stack();
stack.push(100);
stack.push(200);
stack.push(300);
stack.getMin();

// console.log(stack);