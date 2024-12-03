let arr = [3, -4, 2, -3, -1, 7, -5];
let min = Infinity;

for(let i=0; i<arr.length; i++){
    let sum = 0;
    let subArr = [];
    for(let j=i; j<arr.length; j++){
        sum += arr[j];
        min = Math.min(sum, min)
    }
}

console.log(min);
