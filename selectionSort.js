function bubbleSort(arr1){

    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr1.length;j++){
            if(arr1[j]>arr1[j+1]){
                var temp=arr1[j+1];
                arr1[j+1]=arr1[j];
                arr1[j]=temp;
            }
        }
    }
    console.log(arr1);
}
bubbleSort([1,4,6,3,2,0]);

//selectionSort

function selectionSort(arr2){

    for(let i=0;i<arr2.length;i++){
        var minValue=i;

        for(let j=i+1;j<arr2.length;j++){
            if(arr2[j]<arr2[minValue]){
                minValue=j;
            }
           
        }
        var temp=arr2[i];
        arr2[i]=arr2[minValue];
        arr2[minValue]=temp;
    }
    console.log(arr2);

}
selectionSort([1,4,6,3,2,0]);
