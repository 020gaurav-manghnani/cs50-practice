function bubbleSort(arr){

    for(let i=0;i<arr.length;i++){

        for(let j=0;j<arr.length;j++)
        {
            if(arr[j]>arr[j+1]){
                var temp = arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;

            }
            
        }
      
    }
    console.log(arr);
}
bubbleSort([1,3,2,5,4,6,0,10,9]);
//[1,2,3,4,5]