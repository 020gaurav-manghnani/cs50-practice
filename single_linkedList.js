class Singly_linked_list {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.length++;
return this;
}

var list = new Singly_linked_list();
list.push("hello")