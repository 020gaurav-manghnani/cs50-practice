class MAX_heap{
    constructor(){
        this.values=[23,45,65,20,10];
    }
    insert(element){
           this.values.push(element);
           this.bubbleUp();
    }
    bubbleUp(){

        var elementIdx=this.values.length-1;
        var element=this.values[elementIdx];
        // console.log(element,elementIdx)

        while(elementIdx > 0){
            var parentIdx= Math.floor((elementIdx-1)/2);
            var parentValue=this.values[parentIdx];

            if(element <= parentValue) break;
                this.values[parentIdx]=element;
                this.values[elementIdx]=parentValue;
                elementIdx=parentIdx;
            
        }
        // console.log(heap);
    }
    
    
}

var heap=new MAX_heap()
heap.insert(75);
// heap.insert(1);
// heap.insert(10);
heap.bubbleUp();
console.log(heap);