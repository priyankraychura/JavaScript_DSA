let arr = [23, 45, 12, 22, 2, 98, 7, 54, 6];
let max = 0;

for(let i=0; i<arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}

console.log("Maximum value is: ", max)