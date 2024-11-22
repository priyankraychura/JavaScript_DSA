// Move all zero in last of array

let arr = [1,2,3,0,5,0,0,5,6]
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

