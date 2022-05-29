function mergeSort(arr1,arr2){

    var result=[];
    var i=0;
    var j=0;

    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            result.push(arr1[i]);
            i++;
        }
        else{
            result.push(arr2[j]);
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
mergeSort([1,4,7],[2,3,5,6]);