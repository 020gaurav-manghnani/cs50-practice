class MAX_heap{
    constructor() {
        this.values=[10,20,30,0,55];
    }
    insert(element){
        this.values.push(element)
        this.bubbleUp();
    }
    bubbleUp(){
        var elementIdx=this.values.length-1;
        var elementValue=this.values[elementIdx];
        
        while(elementIdx > 0){
            var parentIdx=Math.floor((elementIdx-1)/2);
            var parentValue=this.values[parentIdx];
            if(elementValue <= parentValue) break;
            this.values[parentIdx]=elementValue;
            this.values[elementIdx]=parentValue;
            elementIdx=parentIdx;


        }

    }

}

var heap=new MAX_heap()
heap.insert(100);
heap.bubbleUp()
console.log(heap);