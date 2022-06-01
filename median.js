function median(nums1,nums2){

    var joinArrys=nums1.concat(nums2);
    console.log(joinArrys);
    joinArrys.sort()
    console.log(joinArrys);

    var middle = joinArrys[Math.floor((joinArrys.length-1)/2)];
    middle--
    // console.log(joinArrys[middle]);

    if(joinArrys.length%2==0){
 
        var ans=joinArrys[middle]+joinArrys[middle+1];
        var result=ans/2;
        console.log(result);
    }
    else{
        console.log(joinArrys[middle]);
    }
    }


median([1,3],[2])