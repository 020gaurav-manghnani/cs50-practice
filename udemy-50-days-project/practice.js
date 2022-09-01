const radius=[1,2,3,4,5];

var area=function(radius){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI*radius[i]*radius[i]);
    }
    return output;
}
// area(radius);
console.log(area(radius));