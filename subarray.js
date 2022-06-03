function subarray(arr,sum){
 
   
  for(let i=0;i<arr.length;i++){
    var value=0;
  for(let j=i;j<arr.length;j++){
      value=value+arr[i];
      if( value>sum){

      }
      else if(value===sum){
          console.log(arr[i,j ]);
      }
  } 
  }
//   console.log(value);
}
subarray([1,2,3,4,5,6,7],12)