function peak(arr,n){

var peak;
for(let i=0;i<n-1;i++){

    for(let j=0;j<n-1;j++){
        if(arr[j]>arr[j-1]&&arr[j]>arr[j+1]){
              peak=arr[j];
              console.log(peak);
        }
    }
    
}


}
peak([1,4,6,3,7,0],6)