let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let transpose = [];
for(let row=0; row<arr.length; row++){
    let temp = [];
    for(let col=0; col<arr[row].length; col++){
        temp.push(arr[col][row])
    }
    transpose.push(temp);
}

console.log(transpose);