// Move all zero in last of array

let arr = [45, 2, 0, 44, 0, 7, 5, 8, 0]
let newArr = [];
let zeros = [];

for(let i=0; i<arr.length; i++){
    if(arr[i] > 0){
        newArr.push(arr[i]);
    } else{
        zeros.push(arr[i]);
    }
}

let merged = newArr.concat(zeros)
console.log(merged)

