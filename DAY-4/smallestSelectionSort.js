let arr = [12, 45, 23, 56, 78, 11, 6];

for(let i=0; i<arr.length; i++){
    let minInd = i;
    for(let j=i+1; j<arr.length; j++){
        if(arr[j] < arr[minInd]){
            minInd = j;
        }
    }

    let temp = arr[i];
    arr[i] = arr[minInd];
    arr[minInd] = temp;
}

console.log(arr[0])