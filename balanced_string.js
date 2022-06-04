function string(A){

    var left=0;
    var right=0;
    for(let i=0;i<A.length;i++){

        if(A[i]==="("){
            left++;
        }
        else{

            right++;
        }
    }
    console.log(left,right);
    if(left!=right){
        console.log("not balanced");
    }
    else{
        console.log("balanced")
    }
}
string("((((()))))))((()()())))((())")