let arr = [-4, 45, -22, 67, -1, -3, 88, 90];
let max = -Infinity;

for(let i=0; i<arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}

console.log(max)

