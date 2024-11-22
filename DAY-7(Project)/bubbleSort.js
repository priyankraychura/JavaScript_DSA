const arr = [6, 3, 8, 5, 2];  
let swapsCount = 0;
let sorted = false;

for(let j=0; j<arr.length; j++){
    for(let i=0; i<arr.length; i++){
        if(arr[i] > arr[i+1]){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
            swapsCount++;

            sorted = true;
        } 
    }

    if(sorted){
        break;
    }
}

console.log("Swaps required are: ", swapsCount);
console.log(arr);