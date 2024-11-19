let arr = [12, 45, 23, 56, 78, 11, 6];

for(let i=0; i<arr.length; i++){
    if(arr[i] > arr[i+1]){
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
}

console.log(arr)