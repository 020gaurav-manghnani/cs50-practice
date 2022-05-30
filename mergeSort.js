function binarySearch(arr,val){

    for(let i=0;i<arr.length;i++){
        var value=arr[i];
        
        value===val ? console.log( "found") : console.log( "not found");
       
    }
    // console.log("not found");
}
binarySearch([1,2,3,4,5,6,7],7);


//bubblesort

function bubblesort(arr){

    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
            }
        }
    }
    console.log(arr);
}
bubblesort([1,3,5,7,9,2,4,6,8,10]);

//selectionSort

function selectionSort(arr){

    for(let i=0;i<arr.length;i++){
        var minValue=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minValue]){
                minValue=j;
            }
            var temp=arr[j];
            arr[j]=arr[minValue];
            arr[minValue]=temp;
        }
    }
    console.log(arr);
}
selectionSort([1,3,0,5,6,2]);

//mergeSort
//without using reccursion

function mergeSort(arr1,arr2){
    var result=[];
    var i=0;
    var j=0;
    
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            result.push(arr1[i])
            i++;
        }
        else{
            result.push(arr2[j])
            j++;
        }
       
    }
    while(i<arr1.length){
        result.push(arr1[i])
        i++;
        }
        while(j<arr2.length){
            result.push(arr2[j])
            j++;
        }
 console.log(result);
}
mergeSort([1,3,5],[2,4,6])


