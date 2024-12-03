let arr = [-2, 3, 1, -4, 2, 5];
let max = -Infinity;

for(let i=0; i<arr.length; i++){
    let subArr = [];
    let sum = 0;
    for(let j=i; j<arr.length; j++){
        subArr.push(arr[j]);
        sum += arr[j];

        if(sum > max){
            max = sum;
        }
        // max = Math.max(sum, max);
    }
}

console.log("Sub array max is: ", max);