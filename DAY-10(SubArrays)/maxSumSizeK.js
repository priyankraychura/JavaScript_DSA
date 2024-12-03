let arr = [2, 1, 5, 1, 3, 2];
let max = -Infinity;
let k = 3;

for(let i=0; i<arr.length; i++){
    let subArr = [];
    let sum = 0;
    for(let j=i; j<arr.length; j++){
        subArr.push(arr[j]);
        sum += arr[j];

        if(subArr.length == k){
            max = Math.max(sum, max);
        }

    }
}

console.log("Sub array max is: ", max);