let arr = [12, 3, 45, 7, 23, 9];

let max = 0;

for(let i=0; i<arr.length; i++){
    if(arr[i] > max) {
        max = arr[i];
    }
}

console.log("Max element is: ", max);