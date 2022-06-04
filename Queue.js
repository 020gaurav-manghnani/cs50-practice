//practice (sample)

// var q=[];
// q.push("first");
// q.push("second");
// q.push("third");
// console.log(q);
// q.pop();
// console.log(q);
//yaha ye array ke end me se pop kar rha h
//but in queue it should remove elements from the beginign of the array(FIFO)

//making queue using linked lst

//.........................................................................

class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Queue{
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0;
    }
    //now creating enqueue function to add nodes into queue
    enqueue(val){
        //crating a new node in the queue and if thats the first node set its property as first node in the queue
        var newNode = new Node(val);
        if(!this.head){
            this.first=newNode;
            this.last=newNode
        }
        else{
            this.last.next=temp;
            this.last=newNode;
        }
        return ++this.size;
    }
}
//creating an object for the queue
var queue= new Queue()
queue.enqueue("first");
queue.enqueue("second");
queue.enqueue("third");
console.log(queue);