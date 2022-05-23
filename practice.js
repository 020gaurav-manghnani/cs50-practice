 var fun=function(str){
     console.log("func executing", str);
     var object={};
    for(let i=0;i<str.length;i++){
        var char = object[i];
        if(object[char]>0){
            object[char]++;
        }
        else{
            object[char]=1;
        }
    }
}

fun('hello');


