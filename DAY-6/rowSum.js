let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let sum = [];
for(let row=0; row<arr.length; row++){
    let sumNum = 0;
    for(let col=0; col<arr[row].length; col++){
        sumNum += arr[row][col]
    }
    sum.push(sumNum);
}

console.log(sum)