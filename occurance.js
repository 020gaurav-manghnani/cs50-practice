

function occurance(arr,x){

    var object={}

    for(let i=0;i<arr.length;i++){

        var store=arr[i];
        object[store]?object[store]+=1:object[store]=1;

    }
    console.log("value of x i.e." + x + " " +"present in array " + object[x] + " "+"times");
    // console.log(object);
}
occurance([1,2,3,4,4,4,5],5)