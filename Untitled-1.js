function anagram(first , second){

    var object={};

    for(let i=0;i<first.length;i++){
        var letter=first[i];

        object[letter] ? object[letter]+=1 : object[letter]=1;
    }
    // console.log(object);
    for(let i=0;i<second.length;i++){
        var letter=second[i];

        if(!object[letter]){
            console.log("false");
        }
        else{
            object[letter]-=1;
            
        }
     
        
    }
    console.log(object)
// console.log("true")
}
anagram("anagram","naaagrms");