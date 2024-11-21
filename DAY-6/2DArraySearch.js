let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let found = false;
let searchIndex = [];
target = 5;

for(let row=0; row<arr.length; row++){
    for(let col=0; col<arr[row].length; col++){
        if(arr[row][col] == target){
            searchIndex.push(row);
            searchIndex.push(col);
            found = true;
            break;
        }
    }
    if(found){
        break;
    }
}

console.log(searchIndex)