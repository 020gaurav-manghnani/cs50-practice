function rev(arr){

    var n=(arr.length-1);
    for(let i=n;i>=0;i--){
        var newArr=arr[i];
        console.log(newArr);
    }
    
}
rev([1,2,3,4,5])