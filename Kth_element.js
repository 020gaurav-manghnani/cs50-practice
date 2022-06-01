
//k ki value given hogi utni value ka array me se smallest number 
//to phle array ko decending order me krdiya phir k ki value -1 karke and aagya

function Kth_element(arr,k){


    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
            }
        }
    }
    console.log(arr[k-1]);
}

Kth_element([1,5,10,13,15],4)