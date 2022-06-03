// const n1={
//     data:100
// };

// const n2={
//     data:200
// };

// n1.next=n2;
// console.log(n1);

class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    inserFirst(data){
        this.head=new Node(data,this.head)
        console.log(this.head.next);
    }

    printListData(){
        var current=this.head;
        
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }
}

const ll = new LinkedList()
ll.inserFirst(100);
ll.inserFirst(200);
ll.inserFirst(300);

// ll.printListData();
