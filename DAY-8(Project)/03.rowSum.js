let arr =  [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let counterArr = [];

for(let i=0; i<arr.length; i++){
    let count = 0;
    for(let j=0; j<arr[i].length; j++){
        count += arr[i][j];
    }
    counterArr.push(count);
}

console.log(counterArr);