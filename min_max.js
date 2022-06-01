function min_max(arr){

    var max=arr[0];
    var min=arr[0];
    for(let i=0;i<arr.length;i++){
        
          if(max <arr[i] && min>arr[i]){
            max=arr[i];  
            min=arr[i];
            // console.log("value max is",max) 
        
    }
}
 console.log(max,min);
}
min_max([10,9,0,900,1000])