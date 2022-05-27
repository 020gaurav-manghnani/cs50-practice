function array(arr,val){

    var start=0;
    var end=arr.length-1;
    var mid=(start+end)/2;
    // console.log(start,end,mid);

    for(let i=start;i<end;i++){
        if(arr[mid]===val){
            console.log("found");
        }
        else if(val>mid){

            start=mid+1;
        }
        else if(val<mid){
            end=mid-1;
        }
        console.log(start,end,mid);
        return mid;
    }

    
}
array([1,23,45,34,23],34);