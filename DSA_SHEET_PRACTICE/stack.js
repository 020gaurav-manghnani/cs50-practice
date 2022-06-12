class Stack{
    constructor(value){
        this.array=[];
        this.top=0;
    }
    push(value){
        this.array.push(value);
        console.log(this.array)
    }
    // pop(){
    //     if(this.root===null) {
    //         console.log("-1");
    //     }
    //     else{
    //         while(this.array.length){
    //             this.array.pop()
    //         }
            
            

    //     }
        

    // }
}
var stck = new Stack()
 stck.push(3)
 stck.push(4)
 stck.push(5)
 stck.push(6)

 
